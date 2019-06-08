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
    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
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
      margin: { t: 0 },
      hovermode: 'closest',
      // place title for plot under x-axis
      xaxis: {title: 'OTU ID'}
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

    // // Enter a speed between 0 and 180
    // var level = 175;

    // // Trig to calc meter point
    // var degrees = 180 - level,
    //     radius = .5;
    // var radians = degrees * Math.PI / 180;
    // var x = radius * Math.cos(radians);
    // var y = radius * Math.sin(radians);

    // // Path: may have to change to create a better triangle
    // var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
    //     pathX = String(x),
    //     space = ' ',
    //     pathY = String(y),
    //     pathEnd = ' Z';
    // var path = mainPath.concat(pathX,space,pathY,pathEnd);

    // var data = [{ type: 'scatter',
    //   x: [0], y:[0],
    //     marker: {size: 28, color:'850000'},
    //     showlegend: false,
    //     name: 'speed',
    //     text: level,
    //     hoverinfo: 'text+name'},
    //   { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
    //   rotation: 90,
    //   text: ['TOO FAST!', 'Pretty Fast', 'Fast', 'Average',
    //             'Slow', 'Super Slow', ''],
    //   textinfo: 'text',
    //   textposition:'inside',
    //   marker: {colors:['rgba(14, 127, 0, .5)', 'rgba(110, 154, 22, .5)',
    //                         'rgba(170, 202, 42, .5)', 'rgba(202, 209, 95, .5)',
    //                         'rgba(210, 206, 145, .5)', 'rgba(232, 226, 202, .5)',
    //                         'rgba(255, 255, 255, 0)']},
    //   labels: ['151-180', '121-150', '91-120', '61-90', '31-60', '0-30', ''],
    //   hoverinfo: 'label',
    //   hole: .5,
    //   type: 'pie',
    //   showlegend: false
    // }];

    // var layout = {
    //   shapes:[{
    //       type: 'path',
    //       path: path,
    //       fillcolor: '850000',
    //       line: {
    //         color: '850000'
    //       }
    //     }],
    //   title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per Week',
    //   height: 1000,
    //   width: 1000,
    //   xaxis: {zeroline:false, showticklabels:false,
    //             showgrid: false, range: [-1, 1]},
    //   yaxis: {zeroline:false, showticklabels:false,
    //             showgrid: false, range: [-1, 1]}
    // };

    // Plotly.plot('myDiv', data, layout);

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
