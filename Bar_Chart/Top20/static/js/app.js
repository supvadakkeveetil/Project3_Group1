


// Load data from GeoJSON and create the horizontal bar chart
d3.json("https://raw.githubusercontent.com/supvadakkeveetil/Project3_Group1/main/Fire_Map/wildfire_geo_CA2.geojson").then(function(data) {
    // Process and structure your GeoJSON data as needed
    const features = data.features.map(d => {
        return {
            FIRE_NAME: d.properties.FIRE_NAME,
            FIRE_SIZE: d.properties.FIRE_SIZE,
            NWCG_CAUSE_CLASSIFICATION: d.properties.NWCG_CAUSE_CLASSIFICATION,
            FIRE_YEAR: d.properties.FIRE_YEAR
           
        };
    });

    // Sort data by FIRE_SIZE in descending order and take the top 20
    const top20Data = features.sort((a, b) => b.FIRE_SIZE - a.FIRE_SIZE).slice(0, 20);

    // Set up chart dimensions dynamically based on the number of Y-labels
    const margin = { top: 50, right: 20, bottom: 70, left: 200 };
    const labelHeight = 20; // Height per Y-label
    const height = top20Data.length * labelHeight;
    const width = 800 - margin.left - margin.right;

    // Create SVG container
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Create scales
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(top20Data, d => d.FIRE_SIZE)])
        .range([0, width]);

    const yScale = d3.scaleBand()
        .domain(top20Data.map(d => d.FIRE_NAME))
        
        .range([0, height])
        .padding(0.1);

    // Create gradient color scale from red to yellow
    const colorScale = d3.scaleLinear()
        .domain([0, top20Data.length - 1])
        .range(["red", "yellow"]);

    // Create bars
    const bars = svg.selectAll("rect")
        .data(top20Data)
        .enter()
        .append("rect")
        .attr("y", d => yScale(d.FIRE_NAME))
        .attr("width", d => xScale(d.FIRE_SIZE))
        .attr("height", yScale.bandwidth())
        .attr("fill", (d, i) => colorScale(i))
        .on("mouseover", function(d) {
            // Show tooltip on hover
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html(`<strong>${d.FIRE_NAME}</strong><br>Acres Burned: ${d.FIRE_SIZE}<br>Cause: ${d.NWCG_CAUSE_CLASSIFICATION}<br>Year: ${d.FIRE_YEAR}`)
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            // Hide tooltip on mouseout
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Add X axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width / 2)
        .attr("y", margin.bottom - 10)
        .text("Acres Burned");

    // Add Y axis
    svg.append("g")
        .call(d3.axisLeft(yScale))
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -margin.left + 20)
        .text("Wildfire Name")
        .style("text-anchor", "middle");

    // Tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
});