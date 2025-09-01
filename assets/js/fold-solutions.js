document.addEventListener('DOMContentLoaded', function() {
  // Find all elements with .fold.s.o classes
  var foldElements = document.querySelectorAll('.fold.s.o');
  
  foldElements.forEach(function(element) {
    // Create main container
    var container = document.createElement('div');
    container.className = 'solution-container';
    
    // Find code blocks and plots within this fold element
    var codeBlocks = element.querySelectorAll('pre code, .sourceCode');
    var plots = element.querySelectorAll('img, .plot, canvas, svg');
    var textContent = [];
    
    // Separate content into categories
    var allChildren = Array.from(element.children);
    allChildren.forEach(function(child) {
      if (child.tagName === 'PRE' || child.classList.contains('sourceCode')) {
        // This is code
      } else if (child.tagName === 'IMG' || child.classList.contains('plot')) {
        // This is a plot
      } else {
        // This is text/explanation
        textContent.push(child);
      }
    });
    
    // Create "Show Solution" section for text content
    if (textContent.length > 0) {
      var textDetails = document.createElement('details');
      var textSummary = document.createElement('summary');
      textSummary.textContent = 'Show Solution';
      textSummary.style.cursor = 'pointer';
      textDetails.appendChild(textSummary);
      
      textContent.forEach(function(item) {
        textDetails.appendChild(item.cloneNode(true));
      });
      
      container.appendChild(textDetails);
    }
    
    // Create "Show Source" section for code
    if (codeBlocks.length > 0) {
      var codeDetails = document.createElement('details');
      var codeSummary = document.createElement('summary');
      codeSummary.textContent = 'Show Source';
      codeSummary.style.cursor = 'pointer';
      codeDetails.appendChild(codeSummary);
      
      codeBlocks.forEach(function(block) {
        codeDetails.appendChild(block.cloneNode(true));
      });
      
      container.appendChild(codeDetails);
    }
    
    // Create "Show Plot" section for plots
    if (plots.length > 0) {
      var plotDetails = document.createElement('details');
      var plotSummary = document.createElement('summary');
      plotSummary.textContent = 'Show Plot';
      plotSummary.style.cursor = 'pointer';
      plotDetails.appendChild(plotSummary);
      
      plots.forEach(function(plot) {
        plotDetails.appendChild(plot.cloneNode(true));
      });
      
      container.appendChild(plotDetails);
    }
    
    // If no specific content types found, create a general "Show Solution"
    if (textContent.length === 0 && codeBlocks.length === 0 && plots.length === 0) {
      var generalDetails = document.createElement('details');
      var generalSummary = document.createElement('summary');
      generalSummary.textContent = 'Show Solution';
      generalSummary.style.cursor = 'pointer';
      generalDetails.appendChild(generalSummary);
      
      // Move all content
      while (element.firstChild) {
        generalDetails.appendChild(element.firstChild);
      }
      
      container.appendChild(generalDetails);
    }
    
    // Replace the original .fold element
    element.parentNode.replaceChild(container, element);
  });
});