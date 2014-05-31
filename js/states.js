// d3.csv("./d/datatest.csv", function(data) {
//   dataset=data;
//   console.log('inside csv import, dataset = ' + dataset);
//   console.log(JSON.stringify(dataset));
// });

// var dataset;

d3.csv("./d/datatest.csv", function(data) {
  dataset=data;

  console.log("dataset" + JSON.stringify(dataset));





  var g = d3.select('#statecontainer').append('svg').attr('width', 1000).attr('height',600).append('g').attr('transform', 'translate(30,0), scale(1)')
;


      var d = [];
      for (var i in states) {
        if (!states.hasOwnProperty(i)) continue;
        <!-- console.log('i = ' + i, 'states[i] = ' + states[i]); -->
        d.push({
          id: i,
          path: states[i],
          <!-- color: '#'+Math.floor(Math.random()*16777215).toString(16) -->
          color: '#a0a0a0'
        });
      }

  for (var i in dataset) {
    console.log("state = " + dataset[i]['state']);
    console.log("influence = " + dataset[i]['influence']);

    myColor = dataset[i]['influence']/10;
    myRGB = 'rgba(255,0,0,' + myColor + ')';

    d.push({
      myColor: .5,
      id: dataset[i]['state'],
      path: states[dataset[i]['state']],
      <!-- color: '#'+Math.floor(Math.random()*16777215).toString(16) -->
      color: myRGB
    });
  }



      // d.push({
      //   id: 'CA',
      //   path: states['CA'],
      //   <!-- color: '#'+Math.floor(Math.random()*16777215).toString(16) -->
      //   color: 'red'
      // });

      // var p = g.selectAll('path').data(d);

      // d.push({
      //   id: 'MN',
      //   path: states['MN'],
      //   <!-- color: '#'+Math.floor(Math.random()*16777215).toString(16) -->
      //   color: 'green'
      // });

      var p = g.selectAll('path').data(d);

      p.enter().append('path')
           .attr('fill','green')
           .attr('d', function(d) { return d.path; })
           .attr('stroke', 'rgba(255,255,255,.2)')
           .attr('opacity',0)
           .attr('transform', 'translate(1000,1000)scale(0)translate(-1000,-1000)');

      p.transition().duration(500)
        .attr('fill',  function(d) { return d.color;})
                    .delay(function(d, i) { return i * 10 })
                    .attr('opacity', 1)
                    .attr('transform', 'translate(900,300)scale(1)translate(-900,-300)');





});

// var legend = svg.append("g")
//     .attr("class", "legend")
//     .attr("x", w - 65)
//     .attr("y", 25)
//     .attr("height", 100)
//     .attr("width", 100);

//   legend.selectAll('g').data(dataset)
//       .enter()
//       .append('g')
//       .each(function(d, i) {
//         var g = d3.select(this);
//         g.append("rect")
//           .attr("x", w - 65)
//           .attr("y", i*25)
//           .attr("width", 10)
//           .attr("height", 10)
//           .style("fill", color_hash[String(i)][1]);

//         g.append("text")
//           .attr("x", w - 50)
//           .attr("y", i * 25 + 8)
//           .attr("height",30)
//           .attr("width",100)
//           .style("fill", color_hash[String(i)][1])
//           .text(color_hash[String(i)][0]);

//       });

