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


      var d = [],
          stateIdx = {};
      for (var i in states) {
        if (!states.hasOwnProperty(i)) continue;
        <!-- console.log('i = ' + i, 'states[i] = ' + states[i]); -->
        stateIdx[i] = {
          id: i,
          path: states[i],
        };
        d.push(stateIdx[i]);
      }

  var colorScale = d3.scale.linear()
  .domain([1, 10])
  .range(['grey', 'red']);

  for (var i in dataset) {
    stateIdx[dataset[i].state].value = dataset[i].influence;
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
           .attr('fill', function(d) {
              return colorScale(d.value || 1);
           })
           .attr('d', function(d) { return d.path; })
           .attr('stroke', 'rgba(255,255,255,.2)')
           .attr('opacity',0)
           .attr('transform', 'translate(1000,1000)scale(0)translate(-1000,-1000)')
           .on("mouseover", function(d) {
                      console.log("hellow, mouseover");
                      console.log("d is "+ JSON.stringify(d));
                      console.log("you have moused over " + d.id);
                      var nodeSelection = d3.select(this).style({opacity:'0.8'});

                      // nodeSelection.select("text").style({opacity:'1.0'});
                      })
            .on("mouseout", function(d) {
            console.log("hellow, mouseover");
            console.log("d is "+ JSON.stringify(d));
            console.log("you have moused over " + d.id);
            var nodeSelection = d3.select(this).style({opacity:'1.0'});
            // nodeSelection.select("text").style({opacity:'1.0'});
            });

      p.transition().duration(500)
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

