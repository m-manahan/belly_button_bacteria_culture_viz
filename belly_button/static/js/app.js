function buildMetadata(sample) {
  var sampleVar = sample;
  var url = "/metadata/"; 
  url = url + sampleVar;
  var BellyButtonData = [];
  d3.json(url).then(function(response){
    
    //console.log(response);
    var age = response["AGE"];
    var bbtype = response["BBTYPE"];
    var ethnicity = response["ETHNICITY"];
    var gender = response["GENDER"];
    var location = response["LOCATION"];
    var wfreq = response["WFREQ"];
    var sample = response["sample"];
    BellyButtonData = response;
    var tbody = d3.select("#sample-metadata");
    tbody.html('');                //Clears the data in the table
    var row = tbody.append("ul");
    //console.log(BellyButtonData);
    Object.entries(BellyButtonData).forEach(function([key, value]) {
      
      var cell = tbody.append("li");
      cell.text(`${key} : ${value}`);
    });
    //console.log(sample);
  });
  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`

    // Use `.html("") to clear any existing metadata
    
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
}

function buildCharts(sample) {
  var sampleVar = sample;
  var url = "/samples/"; 
  url = url + sampleVar;
  //var url = "/names";
  d3.json(url).then(function(response){
  //console.log(response)
  var otu_ids = response["otu_ids"];
  var otu_labels = response["otu_labels"];
  var sample_values = response["sample_values"];
  var sample_values1 = sample_values;
  console.log(response);
  //console.log(sample_values);
  //console.log(response["otu_ids"]);
  //console.log(response["otu_labels"]);
  //console.log(response["sample_values"]);
  //console.log(otu_labels.length); 
  //console.log(sample_values.length); 
  //console.log(otu_ids);

    //sample_values.sort(function(a, b){return b-a});
    //1) combine the arrays:

    // @TODO: Build a Pie Chart
var list = [];
for (var j = 0; j < sample_values.length; j++) {
    list.push({'sample_values': sample_values[j], 'otu_ids': otu_ids[j]});
}
//2) sort:
list.sort(function(a, b) {
    return ((a.sample_values > b.sample_values) ? -1 : ((a.sample_values == b.sample_values) ? 0 : 1));
    //Sort could be modified to, for example, sort on the age 
    // if the name is the same.
});

//3) separate them back out:
for (var k = 0; k < list.length; k++) {
    sample_values[k] = list[k].sample_values;
    otu_ids[k] = list[k].otu_ids - 1;
}
//console.log(sample_values);
    //console.log(otu_ids);

  //console.log(otu_labels)

  //Problem sorting out the Labels Correctly
// var list1 = [];
// for (var j = 0; j < sample_values1.length; j++) {
//     list1.push({'sample_values1': sample_values1[j], 'otu_labels': otu_labels[j]});
// }
// console.log(list1);
// //2) sort:
// list1.sort(function(a, b) {
//     return ((a.sample_values1 > b.sample_values1) ? -1 : ((a.sample_values1 == b.sample_values1) ? 0 : 1));
//     //Sort could be modified to, for example, sort on the age 
//     // if the name is the same.
// });

// //3) separate them back out:
// for (var k = 0; k < list1.length; k++) {
//     sample_values1[k] = list1[k].sample_values1;
//     otu_labels[k] = list1[k].otu_labels;
// }
// console.log(otu_labels);
// //console.log(sample_values1);
// //console.log(otu_labels)



    var top10ids = otu_ids.slice(0,10);
    //console.log(sample_values);
    //console.log(otu_labels);
  sample_values = response["sample_values"];
  otu_labels = response["otu_labels"];
  otu_ids = response["otu_ids"];
    //otu_labels.sort(function(a, b){return b-a});
    //console.log(sample_values);
    var top10sample = sample_values.slice(0,10);
    //console.log(top10sample);
    //otu_labels.sort();
    //var top10label = otu_labels.slice(0,10);
    otu_labels = otu_labels.slice(0,10);
    //console.log(top10label);
    //otu_ids.sort(function(a, b){return b-a});
    //console.log(otu_ids);
    
    //  console.log(top10ids);

    var trace1 = {
      labels: top10ids,
      values: top10sample,
      type: 'pie',
      text: otu_labels
      //hoverinfo: 'text'//top10label
    };
    
    var data = [trace1];

    
    var layout = {
      title: "'Bar' Chart",
      showlegend: true,
  legend: {
    x: 1,
    y: 0.5
  }
    };
  
  top10_1 = {"otu_ids":top10ids[0],"sample_values":top10sample[0]};
  top10_2 = {"otu_ids":top10ids[1],"sample_values":top10sample[1]};
  top10_3 = {"otu_ids":top10ids[2],"sample_values":top10sample[2]};
  top10_4 = {"otu_ids":top10ids[3],"sample_values":top10sample[3]};
  top10_5 = {"otu_ids":top10ids[4],"sample_values":top10sample[4]};
  top10_6 = {"otu_ids":top10ids[5],"sample_values":top10sample[5]};
  top10_7 = {"otu_ids":top10ids[6],"sample_values":top10sample[6]};
  top10_8 = {"otu_ids":top10ids[7],"sample_values":top10sample[7]};
  top10_9 = {"otu_ids":top10ids[8],"sample_values":top10sample[8]};
  top10_10 = {"otu_ids":top10ids[9],"sample_values":top10sample[9]};
  Top10List = [top10_1,top10_2,top10_3,top10_4,top10_5,top10_6,top10_7,top10_8,top10_9,top10_10];
  console.log(Top10List);
  //   //end of pie chart
  

  
  ////////////////////////////////////////////////////////////////////////////////////
  
 
  ///////////////////////////////////////////////////////////////////////////////////
Plotly.newPlot("pie", data, layout);
var trace1 = {
  x: otu_ids,
  y: sample_values,
  mode: 'markers',
  marker: {
    size: sample_values
  }
};

var data = [trace1];

var layout = {
  title: 'Bellybutton Bubble Chart',
  showlegend: false,
  height: 800,
  width: 1500
};

Plotly.newPlot('bubble', data, layout);

});
  // @TODO: Use `d3.json` to fetch the sample data for the plots

    






    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
   
  //slice this otu_ids 
  //get top 10 otu_labels 
  //get top 10 sample_values
}

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
