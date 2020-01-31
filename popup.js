var open_pdf_btn = document.getElementById("open_pdf");
var branch = document.getElementById("branch");
var form = document.getElementById("form");
var pdf_url="/web/viewer.html?file=PDF/";
var pdf_iframe =   document.getElementById('pdf_iframe');


function getBranch(){  chrome.storage.sync.get('branch', function(data) {
    
    branch.value = data.branch;
    pdf_iframe.src = pdf_url + data.branch + ".pdf";

  });
}
getBranch()
branch.onchange = function(element) {
 console.log("Change")
  //set branch
  chrome.storage.sync.set({branch: branch.value}, function() {
    console.log('Branch is set');
  });
  getBranch()


}