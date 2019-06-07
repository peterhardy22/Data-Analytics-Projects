// Builds the metadata panel
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
    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
  })
}

// Builds the interactive charts
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
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }
    }];      
    // Layout for bubble chart
    var bubbleLayout = {
      margin: { t: 0 },
      hovermode: 'closest',
      xaxis: {title: 'OTU ID'},
      showlegend: 'false',
    };

    Plotly.plot('bubble', bubbleData, bubbleLayout);

    // Build a Pie Chart using the sample data
    var pieData = [{
      values: sample_values.slice(0,10),
      labels: otu_ids.slice(0,10),
      hovertext: otu_labels.slice(0,10),
      hoverinfo: 'hovertext',
      type: 'pie'
    }];
    // Layout for pie chart
    var pieLayout = {
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
