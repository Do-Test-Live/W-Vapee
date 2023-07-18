function doZoom(size)
{$(".content").css({fontSize:size+"px"});};function CallPrint(strid)
{var prtContent=document.getElementById(strid);var WinPrint=window.open('','','letf=0,top=0,width=600,height=800,toolbar=1,scrollbars=1,status=1,menubar=1');WinPrint.document.write(prtContent.innerHTML);WinPrint.document.close();WinPrint.focus();WinPrint.print();WinPrint.close();}