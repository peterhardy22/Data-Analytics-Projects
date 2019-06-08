// BUILDS METADATA PANEL
function buildMetadata(sample_metadata) {

  // Use `d3.json` to fetch the metadata for a sample
  d3.json(`/metadata/${sample_metadata}`).then(function(data) {
    console.log(data);
    // Use d3 to select the panel with id of `#sample-metadata`
    // Use `.html("") to clear any existing metadata
    var panel = d3.select("#sample-metadata").html("");
    // Use `Object.entries` to add each key and value pair to the panel
    Object.entries(data).forEach(([key, value]) => {
      panel.append('h6').text(`${key}: ${value}`);
    });
  })
}


// BUILDS THE INTERACTIVE CHARTS
function buildCharts(sample_metadata) {

  // Use `d3.json` to fetch the sample data for the plots
  d3.json(`/samples/${sample_metadata}`).then(function(data) {
    console.log(data);
    // Create variables to call data values
    const otu_ids = data.otu_ids;
    const otu_labels = data.otu_labels;
    const sample_values = data.sample_values;

    // Build a Bubble Chart using the sample data
    var bubbleData = [{
      // x-axis values
      x: otu_ids,
      // y-axis values
      y: sample_values,
      // shows otu_labels over each bubble
      text: otu_labels,
      // values show as markers on plot
      mode: 'markers',
      // attributes of the markers
      marker: {
        // make size relative to value quantity
        size: sample_values,
        // make colors unique per id
        color: otu_ids,
        // give them a colorscale for visual
        colorscale: 'Earth'
      }
    }];      
    // Layout for bubble chart
    var bubbleLayout = {
      // sets top margin
      margin: { t: 0 },
      // shows text closest to actual point
      hovermode: 'closest',
      // place title for plot under x-axis
      xaxis: {title: 'OTU ID'}
    };

    Plotly.plot('bubble', bubbleData, bubbleLayout);

    // Build a Pie Chart using the sample data
    var pieData = [{
      // grabs top ten sample_values for values
      values: sample_values.slice(0,10),
      // grabs top ten otu_ids for labels
      labels: otu_ids.slice(0,10),
      // grabs top ten otu_labels for text when hovering
      hovertext: otu_labels.slice(0,10),
      // displays hovertext when hovering
      hoverinfo: 'hovertext',
      type: 'pie'
    }];
    // Layout for pie chart
    var pieLayout = {
      // sets top and left margins
      margin: {t: 0, l: 0}
    }

    Plotly.plot('pie', pieData, pieLayout); 

  })
}

// Builds function to intialize the dashboard
function init() {

  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {

  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
