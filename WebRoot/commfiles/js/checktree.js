/*

CHECKTREE v1.0 RC (c) 2004-2006 Angus Turnbull, http://www.twinhelix.com
Altering this notice or redistributing this file is prohibited.

*/

function CheckTree(myName){
	this.myName=myName;
	this.root=null;
	this.countAllLevels=false;
	this.checkFormat='(%n% checked)';
	this.evtProcessed=navigator.userAgent.indexOf('Safari')>-1?'safRtnVal':'returnValue';
	CheckTree.list[myName]=this};
	CheckTree.list={};
	CheckTree.prototype.init=function(){
		with(this){
			if(!document.getElementById)
			return;
			root=document.getElementById('tree-'+myName);
			if(root){
				var lists=root.getElementsByTagName('ul');
					for(var ul=0;ul<lists.length;ul++){
						lists[ul].style.display='none';
						lists[ul].treeObj=this;
						lists[ul].setBoxStates=setBoxStates;
						var fn=new Function('e','this.setBoxStates(e)');
						if(lists[ul].addEventListener&&navigator.vendor!='Apple Computer,Inc.'){
							lists[ul].addEventListener('click',fn,false)
						}else lists[ul].onclick=fn
			    	}
					root.treeObj=this;
					root.setBoxStates=setBoxStates;
					if(root.addEventListener&&navigator.vendor!='Apple Computer,Inc.'){
						root.addEventListener('click',new Function('e',myName+'.click(e)'),false)}
					else root.onclick=new Function('e',myName+'.click(e)');
					root.setBoxStates({},true,true);
					var nodes=root.getElementsByTagName('li');
					for(var li=0;li<nodes.length;li++){
					if(nodes[li].id.match(/^show-/)){
						nodes[li].className=(nodes[li].className=='last'?'plus-last':'plus')}}}}};
CheckTree.prototype.click=function(e){with(this){e=e||window.event;var elm=e.srcElement||e.target;if(!e[evtProcessed]&&elm.id&&elm.id.match(/^check-(.*)/)){var tree=document.getElementById('tree-'+RegExp.$1);if(tree)tree.setBoxStates(e,true,false)}while(elm){if(elm.tagName.match(/^(input|ul)/i))break;if(elm.id&&elm.id.match(/^show-(.*)/)){var targ=document.getElementById('tree-'+RegExp.$1);if(targ.style){var col=(targ.style.display=='none');targ.style.display=col?'block':'none';elm.className=elm.className.replace(col?'plus':'minus',col?'minus':'plus')}break}elm=elm.parentNode}}};function setBoxStates(e,routingDown,countOnly){with(this){if(!this.childNodes)return;e=e||window.event;var elm=e.srcElement||e.target;if(elm&&elm.id&&elm.id.match(/^check-(.*)/)&&!routingDown&&!e[treeObj.evtProcessed]){var refTree=document.getElementById('tree-'+RegExp.$1);if(refTree){refTree.setBoxStates(e,true,countOnly);e[treeObj.evtProcessed]=true}}var allChecked=true,boxCount=0,subBoxes=null;var thisLevel=this.id.match(/^tree-(.*)/)[1];var parBox=document.getElementById('check-'+thisLevel);for(var li=0;li<childNodes.length;li++){for(var tag=0;tag<childNodes[li].childNodes.length;tag++){var child=childNodes[li].childNodes[tag];if(!child)continue;if(child.tagName&&child.type&&child.tagName.match(/^input/i)&&child.type.match(/^checkbox/i)){if(routingDown&&parBox&&elm&&elm.id&&elm.id.match(/^check-/)&&!countOnly)child.checked=parBox.checked;allChecked&=child.checked;if(child.checked)boxCount++}if(child.tagName&&child.tagName.match(/^ul/i)&&(!e[treeObj.evtProcessed]||routingDown))child.setBoxStates(e,true,countOnly)}}if(!routingDown)e[treeObj.evtProcessed]=true;if(parBox&&parBox!=elm&&!countOnly)parBox.checked=allChecked;if(treeObj.countAllLevels){boxCount=0;var subBoxes=this.getElementsByTagName('input');for(var i=0;i<subBoxes.length;i++)if(subBoxes[i].checked)boxCount++}var countElm=document.getElementById('count-'+thisLevel);if(countElm){while(countElm.firstChild)countElm.removeChild(countElm.firstChild);if(boxCount)countElm.appendChild(document.createTextNode(treeObj.checkFormat.replace('%n%',boxCount)))}}};var chtOldOL=window.onload;window.onload=function(){if(chtOldOL)chtOldOL();for(var i in CheckTree.list)CheckTree.list[i].init()};