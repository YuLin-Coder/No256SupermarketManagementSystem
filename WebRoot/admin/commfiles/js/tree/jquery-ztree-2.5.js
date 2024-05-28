/*
 * JQuery zTree 2.5
 * http://code.google.com/p/jquerytree/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Date: 2011-03-08
 *
 */

(function($) {

	var ZTREE_NODECREATED = "ZTREE_NODECREATED";
	var ZTREE_CLICK = "ZTREE_CLICK";
	var ZTREE_RIGHTCLICK = "ZTREE_RIGHTCLICK";
	var ZTREE_CHANGE = "ZTREE_CHANGE";
	var ZTREE_RENAME = "ZTREE_RENAME";
	var ZTREE_REMOVE = "ZTREE_REMOVE";
	var ZTREE_DRAG = "ZTREE_DRAG";
	var ZTREE_DROP = "ZTREE_DROP";
	var ZTREE_EXPAND = "ZTREE_EXPAND";
	var ZTREE_COLLAPSE = "ZTREE_COLLAPSE";
	var ZTREE_ASYNC_SUCCESS = "ZTREE_ASYNC_SUCCESS";
	var ZTREE_ASYNC_ERROR = "ZTREE_ASYNC_ERROR";

	var IDMark_Switch = "_switch";
	var IDMark_Icon = "_ico";
	var IDMark_Span = "_span";
	var IDMark_Input = "_input";
	var IDMark_Check = "_check";
	var IDMark_Edit = "_edit";
	var IDMark_Remove = "_remove";
	var IDMark_Ul = "_ul";
	var IDMark_A = "_a";

	var LineMark_Root = "root";
	var LineMark_Roots = "roots";
	var LineMark_Center = "center";
	var LineMark_Bottom = "bottom";
	var LineMark_NoLine = "noLine";
	var LineMark_Line = "line";

	var FolderMark_Open = "open";
	var FolderMark_Close = "close";
	var FolderMark_Docu = "docu";

	var Class_CurSelectedNode = "curSelectedNode";
	var Class_CurSelectedNode_Edit = "curSelectedNode_Edit";
	var Class_TmpTargetTree = "tmpTargetTree";
	var Class_TmpTargetNode = "tmpTargetNode";
	
	var Check_Style_Box = "checkbox";
	var Check_Style_Radio = "radio";
	var CheckBox_Default = "chk";
	var CheckBox_False = "false";
	var CheckBox_True = "true";
	var CheckBox_Full = "full";
	var CheckBox_Part = "part";
	var CheckBox_Focus = "focus";
	var Radio_Type_All = "all";
	var Radio_Type_Level = "level";
	
	var MoveType_Inner = "inner";
	var MoveType_Before = "before";
	var MoveType_After = "after";
	var MinMoveSize = "5";

	var settings = new Array();
	var zTreeId = 0;

	//zTree构造函数
	$.fn.zTree = function(zTreeSetting, zTreeNodes) {

		var setting = {
			//Tree 唯一标识，主UL的ID
			treeObjId: "",
			//是否显示CheckBox
			checkable: false,
			//是否在编辑状态
			editable: false,
			//编辑状态是否显示修改按钮
			edit_renameBtn:true,
			//编辑状态是否显示删除节点按钮
			edit_removeBtn:true,
			//是否显示树的线
			showLine: true,
			//是否显示图标
			showIcon: true,
			//是否锁定父节点状态
			keepParent: false,
			//是否锁定叶子节点状态
			keepLeaf: false,
			//当前被选择的TreeNode
			curTreeNode: null,
			//当前正被编辑的TreeNode
			curEditTreeNode: null,
			//是否处于拖拽期间 0: not Drag; 1: doing Drag
			dragStatus: 0,
			dragNodeShowBefore: false,
			//选择CheckBox 或 Radio
			checkStyle: Check_Style_Box,
			//checkBox点击后影响父子节点设置（checkStyle=Check_Style_Radio时无效） 			
			checkType: {
				"Y": "ps",
				"N": "ps"
			},
			//radio 最大个数限制类型，每一级节点限制 或 整棵Tree的全部节点限制（checkStyle=Check_Style_Box时无效）
			checkRadioType:Radio_Type_Level,
			//checkRadioType = Radio_Type_All 时，保存被选择节点的堆栈
			checkRadioCheckedList:[],
			//是否异步获取节点数据
			async: false,
			//获取节点数据的URL地址
			asyncUrl: "",
			//获取节点数据时，必须的数据名称，例如：id、name
			asyncParam: [],
			//其它参数
			asyncParamOther: [],
			//简单Array数组转换为JSON嵌套数据参数
			isSimpleData: false,
			treeNodeKey: "",
			treeNodeParentKey: "",
			rootPID: null,
			//用户自定义名称列
			nameCol: "name",
			//用户自定义子节点列
			nodesCol: "nodes", 
			//用户自定义checked列
			checkedCol: "checked", 
			//折叠、展开特效速度
			expandSpeed: "fast",
			//折叠、展开Trigger开关
			expandTriggerFlag:false,
			//hover 增加按钮接口
			addHoverDom:null,
			//hover 删除按钮接口
			removeHoverDom:null,
			//永久自定义显示控件方法
			addDiyDom:null,
			//字体个性化样式接口
			fontCss:{},
			
			root: {
				isRoot: true,
				nodes: []
			},
			//event Function
			callback: {
				beforeAsync:null,
				beforeClick:null,
				beforeRightClick:null,
				beforeMouseDown:null,
				beforeMouseUp:null,
				beforeChange:null,
				beforeDrag:null,
				beforeDrop:null,
				beforeRename:null,
				beforeRemove:null,
				beforeExpand:null,
				beforeCollapse:null,
				
				nodeCreated:null,
				click:null,
				rightClick:null,
				mouseDown:null,
				mouseUp:null,
				change:null,
				drag:null,
				drop:null,
				rename:null,
				remove:null,
				expand:null,
				collapse:null,
				asyncSuccess:null,
				asyncError:null
			}			
		};

		if (zTreeSetting) {
			var tmp_checkType = zTreeSetting.checkType;
			zTreeSetting.checkType = undefined;
			var tmp_callback = zTreeSetting.callback;
			zTreeSetting.callback = undefined;
			var tmp_root = zTreeSetting.root;
			zTreeSetting.root = undefined;
			
			$.extend(setting, zTreeSetting);
			
			zTreeSetting.checkType = tmp_checkType;				
			$.extend(true, setting.checkType, tmp_checkType);
			zTreeSetting.callback = tmp_callback;				
			$.extend(setting.callback, tmp_callback);
			zTreeSetting.root = tmp_root;				
			$.extend(setting.root, tmp_root);
		}

		setting.treeObjId = this.attr("id");
		setting.treeObj = this;
		setting.root.tId = -1;
		setting.root.name = "ZTREE ROOT";
		setting.root.isRoot = true;
		setting.checkRadioCheckedList = [];
		setting.curTreeNode = null;
		setting.curEditTreeNode = null;
		setting.dragNodeShowBefore = false;
		setting.dragStatus = 0;
		setting.expandTriggerFlag = false;
		if (!setting.root[setting.nodesCol]) setting.root[setting.nodesCol]= [];
		zTreeId = 0;

		if (zTreeNodes) {
			setting.root[setting.nodesCol] = zTreeNodes;
		}
		if (setting.isSimpleData) {
			setting.root[setting.nodesCol] = transformTozTreeFormat(setting, setting.root[setting.nodesCol]);
		}
		settings[setting.treeObjId] = setting;

		setting.treeObj.empty();

		bindTreeNodes(setting, this);

		if (setting.root[setting.nodesCol] && setting.root[setting.nodesCol].length > 0) {
			initTreeNodes(setting, 0, setting.root[setting.nodesCol]);
		} else if (setting.async && setting.asyncUrl && setting.asyncUrl.length > 0) {
			asyncGetNode(setting);
		}
		
		return new zTreePlugin().init(this);

	};

	//绑定事件
	function bindTreeNodes(setting, treeObj) {
		treeObj.unbind(ZTREE_NODECREATED);		
		treeObj.bind(ZTREE_NODECREATED, function (event, treeId, treeNode) {
			if ((typeof setting.callback.nodeCreated) == "function") setting.callback.nodeCreated(event, treeId, treeNode);
		});

		treeObj.unbind(ZTREE_CLICK);		
		treeObj.bind(ZTREE_CLICK, function (event, treeId, treeNode) {
		  if ((typeof setting.callback.click) == "function") setting.callback.click(event, treeId, treeNode);
		});
		
		treeObj.unbind(ZTREE_CHANGE);
		treeObj.bind(ZTREE_CHANGE, function (event, treeId, treeNode) {
		  if ((typeof setting.callback.change) == "function") setting.callback.change(event, treeId, treeNode);
		});

		treeObj.unbind(ZTREE_RENAME);
		treeObj.bind(ZTREE_RENAME, function (event, treeId, treeNode) {
			if ((typeof setting.callback.rename) == "function") setting.callback.rename(event, treeId, treeNode);
		});
		
		treeObj.unbind(ZTREE_REMOVE);
		treeObj.bind(ZTREE_REMOVE, function (event, treeId, treeNode) {
			if ((typeof setting.callback.remove) == "function") setting.callback.remove(event, treeId, treeNode);
		});

		treeObj.unbind(ZTREE_DRAG);
		treeObj.bind(ZTREE_DRAG, function (event, treeId, treeNode) {
		  if ((typeof setting.callback.drag) == "function") setting.callback.drag(event, treeId, treeNode);
		});

		treeObj.unbind(ZTREE_DROP);
		treeObj.bind(ZTREE_DROP, function (event, treeId, treeNode, targetNode, moveType) {
		  if ((typeof setting.callback.drop) == "function") setting.callback.drop(event, treeId, treeNode, targetNode, moveType);
		});

		treeObj.unbind(ZTREE_EXPAND);
		treeObj.bind(ZTREE_EXPAND, function (event, treeId, treeNode) {
			if ((typeof setting.callback.expand) == "function") setting.callback.expand(event, treeId, treeNode);
		});

		treeObj.unbind(ZTREE_COLLAPSE);
		treeObj.bind(ZTREE_COLLAPSE, function (event, treeId, treeNode) {
			if ((typeof setting.callback.collapse) == "function") setting.callback.collapse(event, treeId, treeNode);
		});

		treeObj.unbind(ZTREE_ASYNC_SUCCESS);
		treeObj.bind(ZTREE_ASYNC_SUCCESS, function (event, treeId, treeNode, msg) {
		  if ((typeof setting.callback.asyncSuccess) == "function") setting.callback.asyncSuccess(event, treeId, treeNode, msg);
		});

		treeObj.unbind(ZTREE_ASYNC_ERROR);
		treeObj.bind(ZTREE_ASYNC_ERROR, function (event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
		  if ((typeof setting.callback.asyncError) == "function") setting.callback.asyncError(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown);
		});
		
		setting.treeObj.bind('contextmenu',
			function(event) {
				var targetObj = $(event.target);
				var treeNode = getTreeNodeByDom(setting, targetObj);
				var doRight = true;
				if ((typeof setting.callback.beforeRightClick) == "function") {
					doRight = setting.callback.beforeRightClick(setting.treeObjId, treeNode);
				}
				//触发rightClick事件
				if (doRight && (typeof setting.callback.rightClick) == "function") {
					setting.callback.rightClick(event, setting.treeObjId, treeNode);
					return false;
				} 
				return (typeof setting.callback.rightClick) != "function";
			});
		
		setting.treeObj.bind('mouseup',
			function(event) {
				var targetObj = $(event.target);
				var treeNode = getTreeNodeByDom(setting, targetObj);
				var doMouseUp = true;
				if ((typeof setting.callback.beforeMouseUp) == "function") {
					doMouseUp = setting.callback.beforeMouseUp(setting.treeObjId, treeNode);
				}
				//触发mouseUp事件
				if (doMouseUp && (typeof setting.callback.mouseUp) == "function") {
					setting.callback.mouseUp(event, setting.treeObjId, treeNode);
				}
				return true;
			});
		setting.treeObj.bind('mousedown',
			function(event) {
				var targetObj = $(event.target);
				var treeNode = getTreeNodeByDom(setting, targetObj);
				var doMouseDown = true;
				if ((typeof setting.callback.beforeMouseDown) == "function") {
					doMouseDown = setting.callback.beforeMouseDown(setting.treeObjId, treeNode);
				}
				//触发mouseDown事件
				if (doMouseDown && (typeof setting.callback.mouseDown) == "function") {
					setting.callback.mouseDown(event, setting.treeObjId, treeNode);
				}
				return true;
			});
	}
	
	//根据Dom获取treeNode数据
	function getTreeNodeByDom(setting, obj) {
		var treeNode;
		var targetObj = $(obj);
		if (targetObj.attr("id") == setting.treeObjId) {
			treeNode = null;
		} else {
			while (!targetObj.is("li") && targetObj.attr("id") != setting.treeObjId) {
				targetObj = targetObj.parent();
			};
			var tId = targetObj.attr("id");
			treeNode = getTreeNodeByTId(setting, tId);
		}
		return treeNode;
	}

	//初始化并显示节点Json对象
	function initTreeNodes(setting, level, treeNodes, parentNode) {
		if (!treeNodes) return;

		for (var i = 0; i < treeNodes.length; i++) {
			var node = treeNodes[i];
			node.level = level;
			node.tId = setting.treeObjId + "_" + (++zTreeId);
			node.parentNode = parentNode;
			node[setting.checkedCol] = (node[setting.checkedCol] == true);
			node.checkedOld = node[setting.checkedCol];
			node.check_Focus = false;
			node.check_True_Full = true;
			node.check_False_Full = true;
			node.editNameStatus = false;
			fixParentKeyValue(setting, node);
			
			var tmpParentNode = (parentNode) ? parentNode: setting.root;

			//允许在非空节点上增加节点
			node.isFirstNode = (tmpParentNode[setting.nodesCol].length == treeNodes.length) && (i == 0);
			node.isLastNode = (i == (treeNodes.length - 1));

			if (node[setting.nodesCol] && node[setting.nodesCol].length > 0) {
				node.open = (node.open) ? true: false;
				node.isParent = true;
				showTree(setting, node);
				initTreeNodes(setting, level + 1, node[setting.nodesCol], node);

			} else {
				node.isParent = (node.isParent) ? true: false;
				showTree(setting, node);
				
				//只在末级节点的最后一个进行checkBox修正
				if (setting.checkable && i == treeNodes.length - 1) {
					repairParentChkClass(setting, node);
				}
			}
		}
	}

	//显示单个节点
	function showTree(setting, treeNode) {

		//获取父节点
		var p = treeNode.parentNode;
		if (!p) {
			p = setting.treeObj;
		} else {
			p = $("#" + treeNode.parentNode.tId + IDMark_Ul);
		}

		var html = "<li id='" + treeNode.tId + "' class='tree-node'>" + "<button type=\"button\" id='" + treeNode.tId + IDMark_Switch + "' title='' onfocus='this.blur();'></button>" + "<a id='" + treeNode.tId + IDMark_A + "' onclick=\"" + (treeNode.click || '') + "\" ><button type=\"button\" id='" + treeNode.tId + IDMark_Icon + "' title='' onfocus='this.blur();'></button><span id='" + treeNode.tId + IDMark_Span + "'></span></a>" + "<ul id='" + treeNode.tId + IDMark_Ul + "'></ul>" + "</li>";
		p.append(html);
		
		var switchObj = $("#" + treeNode.tId + IDMark_Switch);
		var aObj = $("#" + treeNode.tId + IDMark_A);
		var nObj = $("#" + treeNode.tId + IDMark_Span);
		var ulObj = $("#" + treeNode.tId + IDMark_Ul);
		var icoObj = $("#" + treeNode.tId + IDMark_Icon);
		
		setNodeName(setting, treeNode);
		setNodeLineIcos(setting, treeNode);
		setNodeFontCss(setting, treeNode);
		
		//增加树节点展开、关闭事件
		ulObj.css({
			"display": (treeNode.open ? "block": "none")
		});
		if (treeNode.isParent) {
			switchObj.bind('click', {
				treeObjId: setting.treeObjId,
				treeNode: treeNode
			},
			onSwitchNode);
			aObj.bind('dblclick', {
				treeObjId: setting.treeObjId,
				treeNode: treeNode
			},
			onSwitchNode);
		}
		aObj.bind('click',
		function() {
			var beforeClick = true;
			if ((typeof setting.callback.beforeClick) == "function") beforeClick = setting.callback.beforeClick(setting.treeObjId, treeNode);
			if (beforeClick == false) return;
			//除掉默认事件，防止文本被选择
			window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			//设置节点为选中状态
			selectNode(setting, treeNode);
			//触发click事件
			setting.treeObj.trigger(ZTREE_CLICK, [setting.treeObjId, treeNode]);
		});
		icoObj.bind('mousedown',
		function() {
			treeNode.editNameStatus = false;
		});

		//显示CheckBox Or Radio
		if (setting.checkable) {
			switchObj.after("<BUTTON type='BUTTON' ID='" + treeNode.tId + IDMark_Check + "' onfocus='this.blur();' ></BUTTON>");
			
			var checkObj = $("#" + treeNode.tId + IDMark_Check);
			
			if (setting.checkStyle == Check_Style_Radio && setting.checkRadioType == Radio_Type_All && treeNode[setting.checkedCol] ) {
				setting.checkRadioCheckedList = setting.checkRadioCheckedList.concat([treeNode]);
			}
			
			setChkClass(setting, checkObj, treeNode);
			
			checkObj.bind('click',
			function() {
				var beforeChange = true;
				if ((typeof setting.callback.beforeChange) == "function") beforeChange = setting.callback.beforeChange(setting.treeObjId, treeNode);
				if (beforeChange == false) return;
				
				treeNode[setting.checkedCol] = !treeNode[setting.checkedCol];
				checkNodeRelation(setting, treeNode);
				
				setChkClass(setting, checkObj, treeNode);
				repairParentChkClassWithSelf(setting, treeNode);

				//触发 CheckBox 点击事件
				setting.treeObj.trigger(ZTREE_CHANGE, [setting.treeObjId, treeNode]);

			});
			
			checkObj.bind('mouseover',
			function() {
				treeNode.checkboxFocus = true;
				setChkClass(setting, checkObj, treeNode);
			});

			checkObj.bind('mouseout',
			function() {
				treeNode.checkboxFocus = false;
				setChkClass(setting, checkObj, treeNode);
			});
		}
		
		setNodeTarget(treeNode);
		setNodeUrl(setting, treeNode);
		
		//编辑、删除按钮
		aObj.hover(
			function() {
				addTreeDom(setting, treeNode);
			},
			function() {
				if (setting.curTreeNode != treeNode)
					removeTreeDom(setting, treeNode);
			}
		);

		aObj.bind('mousedown',
		function(eventMouseDown) {

			//右键不能拖拽
			if (eventMouseDown.button == 2 || !setting.editable) return;

			var doc = document;
			var curNode;
			var tmpArrow;
			var tmpTarget;
			var isOtherTree = false;
			var targetSetting = setting;
			var preTmpTargetNodeId = null;
			var preTmpMoveType = null;
			var tmpTargetNodeId = null;
			var moveType = MoveType_Inner;
			var mouseDownX = eventMouseDown.clientX;
			var mouseDownY = eventMouseDown.clientY;
			var startTime = (new Date()).getTime();

			$(doc).mousemove(function(event) {
				
				//为便于输入框正常操作，在输入框内移动鼠标不能拖拽节点
				if (treeNode.editNameStatus) {
					return true;
				}

				//除掉默认事件，防止文本被选择
				window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
				
				//避免鼠标误操作，对于第一次移动小于MinMoveSize时，不开启拖拽功能
				if (setting.dragStatus == 0 && Math.abs(mouseDownX - event.clientX) < MinMoveSize
						 && Math.abs(mouseDownY - event.clientY) < MinMoveSize) {
					return true;
				}

				$("body").css("cursor", "pointer");
				var switchObj = $("#" + treeNode.tId + IDMark_Switch);

				if (setting.dragStatus == 0 && treeNode.isParent && treeNode.open) {
					expandAndCollapseNode(setting, treeNode, !treeNode.open);
					setting.dragNodeShowBefore = true;
				}

				if (setting.dragStatus == 0) {
					//避免beforeDrag alert时，得到返回值之前仍能拖拽的Bug
					setting.dragStatus = -1;
					var beforeDrag = true;
					if ((typeof setting.callback.beforeDrag) == "function") beforeDrag = setting.callback.beforeDrag(setting.treeObjId, treeNode);
					if (beforeDrag == false) return;
					
					setting.dragStatus = 1;
					showIfameMask(true);

					//设置节点为选中状态
					selectNode(setting, treeNode);
					removeTreeDom(setting, treeNode);

					var tmpNode = $("#" + treeNode.tId).clone();
					tmpNode.attr("id", treeNode.tId + "_tmp");
					tmpNode.css("padding", "0");
					tmpNode.children("#" + treeNode.tId + IDMark_A).removeClass(Class_CurSelectedNode);
					tmpNode.children("#" + treeNode.tId + IDMark_Ul).css("display", "none");

					curNode = $("<ul class='zTreeDragUL'></ul>").append(tmpNode);
					curNode.attr("id", treeNode.tId + IDMark_Ul + "_tmp");
					curNode.addClass(setting.treeObj.attr("class"));
					curNode.appendTo("body");

					tmpArrow = $("<button class='tmpzTreeMove_arrow'></button>");
					tmpArrow.attr("id", "zTreeMove_arrow_tmp");
					tmpArrow.appendTo("body");

					//触发 DRAG 拖拽事件，返回正在拖拽的源数据对象
					setting.treeObj.trigger(ZTREE_DRAG, [setting.treeObjId, treeNode]);
				}
				
				if (setting.dragStatus == 1 && tmpArrow.attr("id") != event.target.id) {
					if (tmpTarget) {
						tmpTarget.removeClass(Class_TmpTargetTree);
						if (tmpTargetNodeId) $("#" + tmpTargetNodeId + IDMark_A, tmpTarget).removeClass(Class_TmpTargetNode);
					}
					tmpTarget = null;
					tmpTargetNodeId = null;					
					
					//判断是否不同的树
					isOtherTree = false;
					targetSetting = setting;
					for (var s in settings) {
						if (settings[s].editable && settings[s].treeObjId != setting.treeObjId 
								&& (event.target.id == settings[s].treeObjId || $(event.target).parents("#" + settings[s].treeObjId).length>0)) {
							isOtherTree = true;
							targetSetting = settings[s];
						}
					}

					var docScrollTop = $(doc).scrollTop();
					var docScrollLeft = $(doc).scrollLeft();
					var treeOffset = targetSetting.treeObj.offset();
					var scrollHeight = targetSetting.treeObj.get(0).scrollHeight;
					var scrollWidth = targetSetting.treeObj.get(0).scrollWidth;
					var dTop = (event.clientY + docScrollTop - treeOffset.top);
					var dBottom = (targetSetting.treeObj.height() + treeOffset.top - event.clientY - docScrollTop);
					var dLeft = (event.clientX + docScrollLeft - treeOffset.left);
					var dRight = (targetSetting.treeObj.width() + treeOffset.left - event.clientX - docScrollLeft);
					var isTop = (dTop < 10 && dTop > -5);
					var isBottom = (dBottom < 10 && dBottom > -5);
					var isLeft = (dLeft < 10 && dLeft > -5);
					var isRight = (dRight < 10 && dRight > -5);
					var isTreeTop = (isTop && targetSetting.treeObj.scrollTop() <= 0);
					var isTreeBottom = (isBottom && (targetSetting.treeObj.scrollTop() + targetSetting.treeObj.height()+10) >= scrollHeight);
					var isTreeLeft = (isLeft && targetSetting.treeObj.scrollLeft() <= 0);
					var isTreeRight = (isRight && (targetSetting.treeObj.scrollLeft() + targetSetting.treeObj.width()+10) >= scrollWidth);

					if (event.target.id && targetSetting.treeObj.find("#" + event.target.id).length > 0) {
						//任意节点 移到 其他节点
						var targetObj = $("#" + event.target.id);
						while (!targetObj.is("li") && targetObj.attr("id") != targetSetting.treeObjId) {
							targetObj = targetObj.parent();
						};

						var canMove = false;
						//如果移到自己 或者自己的子集，则不能当做临时目标
						if (treeNode.parentNode && targetObj.attr("id") != treeNode.tId && $("#" + treeNode.tId).find("#" + targetObj.attr("id")).length == 0) {
							//非根节点移动
							canMove = true;
						} else if (treeNode.parentNode == null && targetObj.attr("id") != treeNode.tId && $("#" + treeNode.tId).find("#" + targetObj.attr("id")).length == 0) {
							//根节点移动
							canMove = true;
						}
						if (canMove) {
							if (event.target.id && 
								(event.target.id == (targetObj.attr('id') + IDMark_A) || $(event.target).parents("#" + targetObj.attr('id') + IDMark_A).length > 0)) {
								tmpTarget = targetObj;
								tmpTargetNodeId = targetObj.attr('id');
								$("#" + tmpTargetNodeId + IDMark_A, tmpTarget).addClass(Class_TmpTargetNode);
							}
						}
					}
					
					//确保鼠标在zTree内部
					if (event.target.id == targetSetting.treeObjId || $(event.target).parents("#" + targetSetting.treeObjId).length>0) {
						//只有移动到zTree容器的边缘才算移到 根（排除根节点在本棵树内的移动）
						if (!tmpTarget && (isTreeTop || isTreeBottom || isTreeLeft || isTreeRight) && (isOtherTree || (!isOtherTree && treeNode.parentNode != null))) {
							tmpTarget = targetSetting.treeObj;
							tmpTarget.addClass(Class_TmpTargetTree);
						}
						//滚动条自动滚动
						if (isTop) {
							targetSetting.treeObj.scrollTop(targetSetting.treeObj.scrollTop()-10);
						} else if (isBottom)  {
							targetSetting.treeObj.scrollTop(targetSetting.treeObj.scrollTop()+10);
						}
						if (isLeft) {
							targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft()-10);
						} else if (isRight) {
							targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft()+10);
						}
						//目标节点在可视区域左侧，自动移动横向滚动条
						if (tmpTarget && tmpTarget != targetSetting.treeObj && tmpTarget.offset().left < targetSetting.treeObj.offset().left) {
							targetSetting.treeObj.scrollLeft(targetSetting.treeObj.scrollLeft()+ tmpTarget.offset().left - targetSetting.treeObj.offset().left);
						}
					}
					
					curNode.css({
						"top": (event.clientY + docScrollTop + 3) + "px",
						"left": (event.clientX + docScrollLeft + 3) + "px"
					});
					
					var dX = 0;
					var dY = 0;
					if (tmpTarget && tmpTarget.attr("id")!=targetSetting.treeObjId) {
						var tmpTargetNode = tmpTargetNodeId == null ? null: getTreeNodeByTId(targetSetting, tmpTargetNodeId);
						var tmpNodeObj = $("#" + treeNode.tId);
						var isPrev = (tmpNodeObj.prev().attr("id") == tmpTargetNodeId) ;
						var isNext = (tmpNodeObj.next().attr("id") == tmpTargetNodeId) ;
						var isInner = (treeNode.parentNode && treeNode.parentNode.tId == tmpTargetNodeId) ;
						
						var canPrev = !isNext;
						var canNext = !isPrev;
						var canInner = !isInner && !(targetSetting.keepLeaf && !tmpTargetNode.isParent);
						var prevPercent = canPrev ? (canInner ? 0.25 : (canNext ? 0.5 : 1) ) : -1;
						var nextPercent = canNext ? (canInner ? 0.75 : (canPrev ? 0.5 : 0) ) : -1;
						
						
						var tmpTargetA = $("#" + tmpTargetNodeId + IDMark_A, tmpTarget);
						var dY_percent = (event.clientY + docScrollTop - tmpTargetA.offset().top)/tmpTargetA.height();
						
						if ((prevPercent==1 ||dY_percent<=prevPercent && dY_percent>=-.2) && canPrev) {
							dX = 1 - tmpArrow.width();
							dY = 0 - tmpArrow.height()/2;
							moveType = MoveType_Before;
						} else if ((nextPercent==0 || dY_percent>=nextPercent && dY_percent<=1.2) && canNext) {
							dX = 1 - tmpArrow.width();
							dY = tmpTargetA.height() - tmpArrow.height()/2;
							moveType = MoveType_After;
						} else {
							dX = 5 - tmpArrow.width();
							dY = 0;
							moveType = MoveType_Inner;
						}
						tmpArrow.css({
							"display":"block",
							"top": (tmpTargetA.offset().top + dY) + "px",
							"left": (tmpTargetA.offset().left + dX) + "px"
						});
						
						if (preTmpTargetNodeId != tmpTargetNodeId || preTmpMoveType != moveType) {
							startTime = (new Date()).getTime();
						}
						if (moveType == MoveType_Inner) {
							window.moveTimer = setTimeout(function() {
								if (moveType != MoveType_Inner) return;
								var targetNode = getTreeNodeByTId(targetSetting, tmpTargetNodeId);
								if (targetNode && targetNode.isParent && !targetNode.open && (new Date()).getTime() - startTime > 500) {
									switchNode(targetSetting, targetNode);
								}
							}, 600);
						}
					} else {
						moveType = MoveType_Inner;
						tmpArrow.css({"display":"none"});
						if (window.moveTimer) {clearTimeout(window.moveTimer);}
					}
					preTmpTargetNodeId = tmpTargetNodeId;
					preTmpMoveType = moveType;
				}
				return false;
			});

			$(doc).mouseup(function(event) {
				if (this.moveTimer) {clearTimeout(this.moveTimer);}
				preTmpTargetNodeId = null;
				preTmpMoveType = null;
				$(doc).unbind("mousemove");
				$(doc).unbind("mouseup");
				$("body").css("cursor", "auto");
				if (tmpTarget) {
					tmpTarget.removeClass(Class_TmpTargetTree);
					if (tmpTargetNodeId) $("#" + tmpTargetNodeId + IDMark_A, tmpTarget).removeClass(Class_TmpTargetNode);
				}
				showIfameMask(false);

				if (setting.dragStatus == 0) return;
				setting.dragStatus = 0;

				if (treeNode.isParent && setting.dragNodeShowBefore && !treeNode.open) {
					expandAndCollapseNode(setting, treeNode, !treeNode.open);
					setting.dragNodeShowBefore = false;
				}

				if (curNode) curNode.remove();
				if (tmpArrow) tmpArrow.remove();

				//显示树上 移动后的节点
				if (tmpTarget && tmpTargetNodeId && treeNode.parentNode && tmpTargetNodeId==treeNode.parentNode.tId && moveType == MoveType_Inner) {
					tmpTarget = null;
				}
				if (tmpTarget) {
					var dragTargetNode = tmpTargetNodeId == null ? null: getTreeNodeByTId(targetSetting, tmpTargetNodeId);
					var beforeDrop = true;
					if ((typeof targetSetting.callback.beforeDrop) == "function") beforeDrop = targetSetting.callback.beforeDrop(targetSetting.treeObjId, treeNode, dragTargetNode, moveType);
					if (beforeDrop == false) return;
					
					if (isOtherTree) {
						removeTreeNode(setting, treeNode);
						addTreeNodes(targetSetting, null, [treeNode], false);
						moveTreeNode(targetSetting, dragTargetNode, treeNode, moveType);
						selectNode(targetSetting, treeNode);
					} else {
						moveTreeNode(targetSetting, dragTargetNode, treeNode, moveType);
					}
					$("#" + treeNode.tId + IDMark_Icon).focus().blur();
					
					//触发 DROP 拖拽事件，返回拖拽的目标数据对象
					setting.treeObj.trigger(ZTREE_DROP, [targetSetting.treeObjId, treeNode, dragTargetNode, moveType]);

				} else {
					//触发 DROP 拖拽事件，返回null
					setting.treeObj.trigger(ZTREE_DROP, [setting.treeObjId, null, null, null]);
				}
			});
			
			//阻止默认事件专门用于处理 FireFox 的Bug，
			//该 Bug 导致如果 zTree Div CSS 中存在 overflow 设置，则拖拽节点移出 zTree 时，无法得到正确的event.target
			if(eventMouseDown.preventDefault) {
				eventMouseDown.preventDefault();
		    }
		});
		
		if ((typeof setting.addDiyDom) == "function") {
			setting.addDiyDom(setting.treeObjId, treeNode);
		}
		//触发nodeCreated事件
		setting.treeObj.trigger(ZTREE_NODECREATED, [setting.treeObjId, treeNode]);
	}

	//获取对象的绝对坐标
	function getAbsPoint(obj) {
		var r = new Array(2);
		oRect = obj.getBoundingClientRect();
		r[0] = oRect.left;
		r[1] = oRect.top;
		return r;
	}
	
	//设置光标位置函数
	function setCursorPosition(obj, pos){
		if(obj.setSelectionRange) {
			obj.focus();
			obj.setSelectionRange(pos,pos);
		} else if (obj.createTextRange) {
			var range = obj.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	}

	var dragMaskList = new Array();
	//显示、隐藏 Iframe的遮罩层（主要用于避免拖拽不流畅）
	function showIfameMask(showSign) {
		//清空所有遮罩
		while (dragMaskList.length > 0) {
			dragMaskList[0].remove();
			dragMaskList.shift();
		}
		if (showSign) {
			//显示遮罩
			var iframeList = $("iframe");
			for (var i = 0; i < iframeList.length; i++) {
				var obj = iframeList.get(i);
				var r = getAbsPoint(obj);
				var dragMask = $("<div id='zTreeMask_" + i + "' class='zTreeMask' style='top:" + r[1] + "px; left:" + r[0] + "px; width:" + obj.offsetWidth + "px; height:" + obj.offsetHeight + "px;'></div>");
				dragMask.appendTo("body");
				dragMaskList.push(dragMask);
			}
		}
	}
	
	//设置Name
	function setNodeName(setting, treeNode) {
		var nObj = $("#" + treeNode.tId + IDMark_Span);
		nObj.text(treeNode[setting.nameCol]);
	}
	//设置Target
	function setNodeTarget(treeNode) {
		var aObj = $("#" + treeNode.tId + IDMark_A);
		aObj.attr("target", (treeNode.target || "_blank"));
	}
	//设置URL
	function setNodeUrl(setting, treeNode) {
		var aObj = $("#" + treeNode.tId + IDMark_A);
		if (treeNode.url && !setting.editable) aObj.attr("href", treeNode.url);
		else aObj.removeAttr("href");
	}
	//设置Line、Ico等css属性
	function setNodeLineIcos(setting, treeNode) {
		if (!treeNode) return;
		var switchObj = $("#" + treeNode.tId + IDMark_Switch);
		var aObj = $("#" + treeNode.tId + IDMark_A);
		var ulObj = $("#" + treeNode.tId + IDMark_Ul);
		var icoObj = $("#" + treeNode.tId + IDMark_Icon);
		
		switchObj.attr("class", "switch");
		if (setting.showLine) {
			if (treeNode.level == 0 && treeNode.isFirstNode && treeNode.isLastNode) {
				switchObj.attr("class", "switch_" + LineMark_Root);
			} else if (treeNode.level == 0 && treeNode.isFirstNode) {
				switchObj.attr("class", "switch_" + LineMark_Roots);
			} else if (treeNode.isLastNode) {
				switchObj.attr("class", "switch_" + LineMark_Bottom);
			} else {
				switchObj.attr("class", "switch_" + LineMark_Center);
			}
			if (treeNode.isLastNode) {
				ulObj.removeClass(LineMark_Line);
			} else {
				ulObj.addClass(LineMark_Line);
			}
		} else {
			switchObj.attr("class", "switch_" + LineMark_NoLine);
		}
		
		var tmpOpen = (treeNode.open ? ("_" + FolderMark_Open) : ("_" + FolderMark_Close));
		switchObj.attr("class", treeNode.isParent ? (switchObj.attr("class") + tmpOpen) : (switchObj.attr("class") + "_" + FolderMark_Docu));

		if (!treeNode.isAjaxing) {
			icoObj.attr("class", (treeNode.iconSkin ? treeNode.iconSkin : ""));
			icoObj.addClass(treeNode.isParent ? ("ico" + tmpOpen) : ("ico_" + FolderMark_Docu));
			var icoStyle = "";
			if (treeNode.icon) icoStyle += "background:url(" + treeNode.icon + ") 0 0 no-repeat;";
			if (setting.showIcon == false || ((typeof setting.showIcon) == "function" && !setting.showIcon(setting.treeObjId, treeNode))) {
				icoStyle += "width:0px;height:0px;";
			}
			if (icoStyle != "")	icoObj.attr("style", icoStyle);
			else icoObj.attr("style", "");
		}

	}
	//设置自定义字体样式
	function setNodeFontCss(setting, treeNode) {
		var aObj = $("#" + treeNode.tId + IDMark_A);
		var fontCss = {};
		if ((typeof setting.fontCss) == "function") {
			fontCss = setting.fontCss(setting.treeObjId, treeNode);
		} else {
			fontCss = setting.fontCss;
		}
		if (fontCss) {
			aObj.css(fontCss);
		}
	}

	//对于button替换class 拼接字符串
	function replaceSwitchClass(obj, newName) {
		if (!obj) return;

		var tmpName = obj.attr("class");
		if (tmpName == undefined) return;
		var tmpList = tmpName.split("_");
		switch (newName) {
		case LineMark_Root:
		case LineMark_Roots:
		case LineMark_Center:
		case LineMark_Bottom:
		case LineMark_NoLine:
			tmpList[1] = newName;
			break;
		case FolderMark_Open:
		case FolderMark_Close:
		case FolderMark_Docu:
			tmpList[2] = newName;
			break;
		}

		obj.attr("class", tmpList.join("_"));
	}
	function replaceIcoClass(treeNode, obj, newName) {
		if (!obj || treeNode.isAjaxing) return;

		var tmpName = obj.attr("class");
		if (tmpName == undefined) return;
		var tmpList = tmpName.split("_");
		switch (newName) {
		case FolderMark_Open:
		case FolderMark_Close:
		case FolderMark_Docu:
			tmpList[1] = newName;
			break;
		}

		obj.attr("class", tmpList.join("_"));
	}
	
	//添加zTree的按钮控件
	function addTreeDom(setting, treeNode) {
		if (setting.dragStatus == 0) {
			treeNode.isHover = true;
			if (setting.editable) {
				addEditBtn(setting, treeNode);
				addRemoveBtn(setting, treeNode);
			}
			if ((typeof setting.addHoverDom) == "function") {
				setting.addHoverDom(setting.treeObjId, treeNode);
			}
		}
	}
	//删除zTree的按钮控件
	function removeTreeDom(setting, treeNode) {
		treeNode.isHover = false;
		removeEditBtn(treeNode); 
		removeRemoveBtn(treeNode); 
		if ((typeof setting.removeHoverDom) == "function") {
			setting.removeHoverDom(setting.treeObjId, treeNode);
		}
	}
	//删除 编辑、删除按钮
	function removeEditBtn(treeNode) {		
		$("#" + treeNode.tId + IDMark_Edit).unbind().remove();
	}
	function removeRemoveBtn(treeNode) {		
		$("#" + treeNode.tId + IDMark_Remove).unbind().remove();
	}
	function addEditBtn(setting, treeNode) {
		if (treeNode.editNameStatus || $("#" + treeNode.tId + IDMark_Edit).length > 0) {
			return;
		}
		var showEdit_RenameBtn = setting.edit_renameBtn;
		if (typeof setting.edit_renameBtn == "function") {
			showEdit_RenameBtn = setting.edit_renameBtn(treeNode);
		}
		if (!showEdit_RenameBtn) {
			return;
		}

		var aObj = $("#" + treeNode.tId + IDMark_A);
		var nObj = $("#" + treeNode.tId + IDMark_Span);
		var editStr = "<button type='button' class='edit' id='" + treeNode.tId + IDMark_Edit + "' title='' onfocus='this.blur();' style='display:none;'></button>";
		nObj.after(editStr);
		
		var editBtnObj = $("#" + treeNode.tId + IDMark_Edit);
//		var right = (setting.treeObj.offset().left+ setting.treeObj.width() + setting.treeObj.scrollLeft() - aObj.offset().left - aObj.width() - 2*editBtnObj.width() - 15);
//		if (right < 0) {
//			//如果节点处于tree的最右侧，为避免无法正常操作按钮，则在左侧显示
//			editBtnObj.remove();
//			aObj.prepend(editStr);
//			editBtnObj = $("#" + treeNode.tId + IDMark_Edit);
//		}
		editBtnObj.bind('click', 
			function() {
				var beforeRename = true;
				if ((typeof setting.callback.beforeRename) == "function") beforeRename = setting.callback.beforeRename(setting.treeObjId, treeNode);
				if (beforeRename == false) return;
				removeTreeDom(setting, treeNode);
				editTreeNode(setting, treeNode);
				return false;
			}
		).bind('mousedown',
			function(eventMouseDown) {return true;}
		).show();
	}
	function addRemoveBtn(setting, treeNode) {		
		if (!setting.edit_removeBtn || $("#" + treeNode.tId + IDMark_Remove).length > 0) {
			return;
		}
		var showEdit_RemoveBtn = setting.edit_removeBtn;
		if (typeof setting.edit_removeBtn == "function") {
			showEdit_RemoveBtn = setting.edit_removeBtn(treeNode);
		}
		if (!showEdit_RemoveBtn) {
			return;
		}
		
		var aObj = $("#" + treeNode.tId + IDMark_A);
		var removeStr = "<button type='button' class='remove' id='" + treeNode.tId + IDMark_Remove + "' title='' onfocus='this.blur();' style='display:none;'></button>";
		aObj.append(removeStr);
		
		var removeBtnObj = $("#" + treeNode.tId + IDMark_Remove);
//		var right = (setting.treeObj.offset().left + setting.treeObj.width() - aObj.offset().left - aObj.width() - 1*removeBtnObj.width() - 15);
//		if (right < 0) {
//			//如果节点处于tree的最右侧，为避免无法正常操作按钮，则在左侧显示
//			removeBtnObj.remove();
//			aObj.prepend(removeStr);
//			removeBtnObj = $("#" + treeNode.tId + IDMark_Remove);
//		}
		
		$("#" + treeNode.tId + IDMark_Remove).bind('click', 
			function() {
				var beforeRemove = true;
				if ((typeof setting.callback.beforeRemove) == "function") beforeRemove = setting.callback.beforeRemove(setting.treeObjId, treeNode);
				if (beforeRemove == false) return;
				removeTreeNode(setting, treeNode);
				//触发remove事件
				setting.treeObj.trigger(ZTREE_REMOVE, [setting.treeObjId, treeNode]);
				return false;
			}
		).bind('mousedown',
			function(eventMouseDown) {return true;}
		).show();
	}
	
	//设置check后，父子节点联动关系
	function checkNodeRelation(setting, treeNode) {
		if (setting.checkStyle == Check_Style_Radio) {
			if (treeNode[setting.checkedCol]) {
				if (setting.checkRadioType == Radio_Type_All) {
					for (var i = setting.checkRadioCheckedList.length-1; i >= 0; i--) {
						var pNode = setting.checkRadioCheckedList[i];
						pNode[setting.checkedCol] = false;
						setting.checkRadioCheckedList.splice(i, 1);
						
						setChkClass(setting, $("#" + pNode.tId + IDMark_Check), pNode);
						if (pNode.parentNode != treeNode.parentNode) {
							repairParentChkClassWithSelf(setting, pNode);
						}
					}
					setting.checkRadioCheckedList = setting.checkRadioCheckedList.concat([treeNode]);
				} else {
					var parentNode = (treeNode.parentNode) ? treeNode.parentNode : setting.root;
					for (var son = 0; son < parentNode[setting.nodesCol].length; son++) {
						var pNode = parentNode[setting.nodesCol][son];
						if (pNode[setting.checkedCol] && pNode != treeNode) {
							pNode[setting.checkedCol] = false;
							setChkClass(setting, $("#" + pNode.tId + IDMark_Check), pNode);
						}
					}
				}
			} else if (setting.checkRadioType == Radio_Type_All) {
				for (var i = 0; i < setting.checkRadioCheckedList.length; i++) {
					if (treeNode == setting.checkRadioCheckedList[i]) {
						setting.checkRadioCheckedList.splice(i, 1);
						break;
					}
				}
			}
			
		} else {
			if (treeNode[setting.checkedCol] && setting.checkType.Y.indexOf("s") > -1) {
				setSonNodeCheckBox(setting, treeNode, true);
				repairSonChkClass(setting, treeNode);
			}
			if (treeNode[setting.checkedCol] && setting.checkType.Y.indexOf("p") > -1) {
				setParentNodeCheckBox(setting, treeNode, true);
			}
			if (!treeNode[setting.checkedCol] && setting.checkType.N.indexOf("s") > -1) {
				setSonNodeCheckBox(setting, treeNode, false);
				repairSonChkClass(setting, treeNode);
			}
			if (!treeNode[setting.checkedCol] && setting.checkType.N.indexOf("p") > -1) {
				setParentNodeCheckBox(setting, treeNode, false);
			}
		}
	}
	
	//设置CheckBox的Class类型，主要用于显示子节点是否全部被选择的样式
	function setChkClass(setting, obj, treeNode) {
		if (!obj) return;
		obj.removeClass();
		var chkName = setting.checkStyle + "_" + (treeNode[setting.checkedCol] ? CheckBox_True : CheckBox_False)
			+ "_" + ((treeNode[setting.checkedCol] || setting.checkStyle == Check_Style_Radio) ? (treeNode.check_True_Full? CheckBox_Full:CheckBox_Part) : (treeNode.check_False_Full? CheckBox_Full:CheckBox_Part) );
		chkName = treeNode.checkboxFocus ? chkName + "_" + CheckBox_Focus : chkName;
		obj.addClass(CheckBox_Default);
		obj.addClass(chkName);
	}
	function repairAllChk(setting, checked) {
		if (setting.checkable) {
			for (var son = 0; son < setting.root[setting.nodesCol].length; son++) {
				var treeNode = setting.root[setting.nodesCol][son];
				treeNode[setting.checkedCol] = checked;
				checkNodeRelation(setting, treeNode);
				var checkObj = $("#" + treeNode.tId + IDMark_Check);
				setChkClass(setting, checkObj, treeNode);
				repairParentChkClassWithSelf(setting, treeNode);
			}
		}
	}
	//修正父节点选择的样式
	function repairParentChkClass(setting, treeNode) {
		if (!treeNode || !treeNode.parentNode) return;
		repairChkClass(setting, treeNode.parentNode);
		repairParentChkClass(setting, treeNode.parentNode);
	}	
	function repairParentChkClassWithSelf(setting, treeNode) {
		if (treeNode[setting.nodesCol] && treeNode[setting.nodesCol].length > 0) {
			repairParentChkClass(setting, treeNode[setting.nodesCol][0]);
		} else {
			repairParentChkClass(setting, treeNode);
		}
	}
	//修正子节点选择的样式
	function repairSonChkClass(setting, treeNode) {
		if (!treeNode || !treeNode[setting.nodesCol]) return;
		for (var son = 0; son < treeNode[setting.nodesCol].length; son++) {
			if (treeNode[setting.nodesCol][son][setting.nodesCol]) {
				repairSonChkClass(setting, treeNode[setting.nodesCol][son]);
			}
		}
		repairChkClass(setting, treeNode);
	}	
	function repairChkClass(setting, treeNode) {
		if (!treeNode) return;
		var trueSign = true;
		var falseSign = true;
		if (treeNode[setting.nodesCol]) {
			for (var son = 0; son < treeNode[setting.nodesCol].length; son++) {
				if (setting.checkStyle == Check_Style_Radio && (treeNode[setting.nodesCol][son][setting.checkedCol] || !treeNode[setting.nodesCol][son].check_True_Full)) {
					trueSign = false;
				} else if (setting.checkStyle != Check_Style_Radio && treeNode[setting.checkedCol] && (!treeNode[setting.nodesCol][son][setting.checkedCol] || !treeNode[setting.nodesCol][son].check_True_Full)) {
					trueSign = false;
				} else if (setting.checkStyle != Check_Style_Radio && !treeNode[setting.checkedCol] && (treeNode[setting.nodesCol][son][setting.checkedCol] || !treeNode[setting.nodesCol][son].check_False_Full)) {
					falseSign = false;
				}
				if (!trueSign || !falseSign) break;
			}
		}
		treeNode.check_True_Full = trueSign;
		treeNode.check_False_Full = falseSign;
		var checkObj = $("#" + treeNode.tId + IDMark_Check);
		setChkClass(setting, checkObj, treeNode);
	}

	//点击展开、折叠节点
	function onSwitchNode(event) {
		var setting = settings[event.data.treeObjId];
		var treeNode = event.data.treeNode;
		
		if (treeNode.open) {
			var beforeCollapse = true;
			if ((typeof setting.callback.beforeCollapse) == "function") beforeCollapse = setting.callback.beforeCollapse(setting.treeObjId, treeNode);
			if (beforeCollapse == false) return;
			setting.expandTriggerFlag = true;
			switchNode(setting, treeNode);
		} else {
			var beforeExpand = true;
			if ((typeof setting.callback.beforeExpand) == "function") beforeExpand = setting.callback.beforeExpand(setting.treeObjId, treeNode);
			if (beforeExpand == false) return;
			setting.expandTriggerFlag = true;
			switchNode(setting, treeNode);
		}
	}

	function switchNode(setting, treeNode) {
		if (treeNode.open || (treeNode && treeNode[setting.nodesCol] && treeNode[setting.nodesCol].length > 0)) {
			expandAndCollapseNode(setting, treeNode, !treeNode.open);
		} else if (setting.async) {
			var beforeAsync = true;
			if ((typeof setting.callback.beforeAsync) == "function") beforeAsync = setting.callback.beforeAsync(setting.treeObjId, treeNode);
			if (beforeAsync == false) {
				expandAndCollapseNode(setting, treeNode, !treeNode.open);
				return;
			}
			
			asyncGetNode(setting, treeNode);
		} else if (treeNode) {
			expandAndCollapseNode(setting, treeNode, !treeNode.open);
		}
	}

	function asyncGetNode(setting, treeNode) {
		if (treeNode && (treeNode.isAjaxing || !treeNode.isParent)) {
			return;
		}
		if (treeNode) {
			treeNode.isAjaxing = true;
			var icoObj = $("#" + treeNode.tId + IDMark_Icon);
			icoObj.attr("class", "ico_loading");
		}

		var tmpParam = "";
		for (var i = 0; treeNode && i < setting.asyncParam.length; i++) {
			tmpParam += (tmpParam.length > 0 ? "&": "") + setting.asyncParam[i] + "=" + treeNode[setting.asyncParam[i]];
		}
		if (Object.prototype.toString.apply(setting.asyncParamOther) === "[object Array]") {
			for (var i = 0; i < setting.asyncParamOther.length; i += 2) {
				tmpParam += (tmpParam.length > 0 ? "&": "") + setting.asyncParamOther[i] + "=" + setting.asyncParamOther[i + 1];
			}
		} else {
			for (var p in setting.asyncParamOther) {
	            tmpParam += (tmpParam.length > 0 ? "&" : "") + p + "=" + setting.asyncParamOther[p];
			}
		}
		
		var url = setting.asyncUrl;
		if (typeof setting.asyncUrl == "function") {
			url =  setting.asyncUrl(treeNode);
		}

		$.ajax({
			type: "POST",
			url: url,
			data: tmpParam,
			success: function(msg) {
				var newNodes = [];
				try {
					if (!msg || msg.length == 0) {
						newNodes = [];
					} else if (typeof msg == "string") {
						newNodes = eval("(" + msg + ")");
					} else {
						newNodes = msg;
					}
				} catch(err) {}
				
				if (treeNode) treeNode.isAjaxing = undefined;
				setNodeLineIcos(setting, treeNode);
				if (newNodes && newNodes != "") {
					addTreeNodes(setting, treeNode, newNodes, false);
				} else {
					addTreeNodes(setting, treeNode, [], false);
				}
				setting.treeObj.trigger(ZTREE_ASYNC_SUCCESS, [setting.treeObjId, treeNode, msg]);

			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				setting.expandTriggerFlag = false;
				setNodeLineIcos(setting, treeNode);
				if (treeNode) treeNode.isAjaxing = undefined;
				setting.treeObj.trigger(ZTREE_ASYNC_ERROR, [setting.treeObjId, treeNode, XMLHttpRequest, textStatus, errorThrown]);
			}
		});
	}

	// 展开 或者 折叠 节点下级
	function expandAndCollapseNode(setting, treeNode, expandSign, animateSign, callback) {
		if (!treeNode || treeNode.open == expandSign) {
			if (typeof callback == "function") callback();
			return;
		}
		
		if (setting.expandTriggerFlag) {
			callback = function(){
				if (treeNode.open) {
					//触发expand事件
					setting.treeObj.trigger(ZTREE_EXPAND, [setting.treeObjId, treeNode]);
				} else {
					//触发collapse事件
					setting.treeObj.trigger(ZTREE_COLLAPSE, [setting.treeObjId, treeNode]);
				}
			};
			setting.expandTriggerFlag = false;
		}
		
		var switchObj = $("#" + treeNode.tId + IDMark_Switch);
		var icoObj = $("#" + treeNode.tId + IDMark_Icon);
		var ulObj = $("#" + treeNode.tId + IDMark_Ul);

		if (treeNode.isParent) {
			if (!treeNode.open) {
				replaceSwitchClass(switchObj, FolderMark_Open);
				replaceIcoClass(treeNode, icoObj, FolderMark_Open);
				treeNode.open = true;
				if (animateSign == false || setting.expandSpeed == "") {
					ulObj.show();
					if (typeof callback == "function") callback();
				} else {
					if (treeNode[setting.nodesCol] && treeNode[setting.nodesCol].length > 0) {
						ulObj.show(setting.expandSpeed, callback);
					} else {
						ulObj.show();
						if (typeof callback == "function") callback();
					}
				}
			} else {
				replaceSwitchClass(switchObj, FolderMark_Close);
				replaceIcoClass(treeNode, icoObj, FolderMark_Close);
				treeNode.open = false;
				if (animateSign == false || setting.expandSpeed == "") {
					ulObj.hide();
					if (typeof callback == "function") callback();
				} else {
					ulObj.hide(setting.expandSpeed, callback);
				}
			}
		} else {
			if (typeof callback == "function") callback();
		}
	}

	//遍历子节点展开 或 折叠
	function expandCollapseSonNode(setting, treeNode, expandSign, animateSign, callback) {
		var treeNodes = (treeNode) ? treeNode[setting.nodesCol]: setting.root[setting.nodesCol];
		
		//针对动画进行优化,一般来说只有在第一层的时候，才进行动画效果
		var selfAnimateSign = (treeNode) ? false : animateSign;
		if (treeNodes) {
			for (var son = 0; son < treeNodes.length; son++) {
				if (treeNodes[son]) expandCollapseSonNode(setting, treeNodes[son], expandSign, selfAnimateSign);
			}
		}
		//保证callback只执行一次
		expandAndCollapseNode(setting, treeNode, expandSign, animateSign, callback );

	}

	//遍历父节点展开 或 折叠
	function expandCollapseParentNode(setting, treeNode, expandSign, animateSign, callback) {
		//针对动画进行优化,一般来说只有在第一层的时候，才进行动画效果
		if (!treeNode) return;
		if (!treeNode.parentNode) {
			//保证callback只执行一次
			expandAndCollapseNode(setting, treeNode, expandSign, animateSign, callback);
			return ;
		} else {
			expandAndCollapseNode(setting, treeNode, expandSign, animateSign);
		}
		
		if (treeNode.parentNode) {
			expandCollapseParentNode(setting, treeNode.parentNode, expandSign, animateSign, callback);
		}
	}

	//遍历父节点设置checkbox
	function setParentNodeCheckBox(setting, treeNode, value) {
		var checkObj = $("#" + treeNode.tId + IDMark_Check);
		treeNode[setting.checkedCol] = value;
		setChkClass(setting, checkObj, treeNode);
		if (treeNode.parentNode) {
			var pSign = true;
			if (!value) {
				for (var son = 0; son < treeNode.parentNode[setting.nodesCol].length; son++) {
					if (treeNode.parentNode[setting.nodesCol][son][setting.checkedCol]) {
						pSign = false;
						break;
					}
				}
			}
			if (pSign) {
				setParentNodeCheckBox(setting, treeNode.parentNode, value);
			}
		}
	}

	//遍历子节点设置checkbox
	function setSonNodeCheckBox(setting, treeNode, value) {
		if (!treeNode) return;
		var checkObj = $("#" + treeNode.tId + IDMark_Check);
		
		if (treeNode != setting.root) {
			treeNode[setting.checkedCol] = value;
			setChkClass(setting, checkObj, treeNode);
		}
		
		if (!treeNode[setting.nodesCol]) return;
		for (var son = 0; son < treeNode[setting.nodesCol].length; son++) {
			if (treeNode[setting.nodesCol][son]) setSonNodeCheckBox(setting, treeNode[setting.nodesCol][son], value);
		}
	}

	//遍历子节点设置level,主要用于移动节点后的处理
	function setSonNodeLevel(setting, parentNode, treeNode) {
		if (!treeNode) return;
		treeNode.level = (parentNode)? parentNode.level + 1 : 0;
		if (!treeNode[setting.nodesCol]) return;
		for (var son = 0; son < treeNode[setting.nodesCol].length; son++) {
			if (treeNode[setting.nodesCol][son]) setSonNodeLevel(setting, treeNode, treeNode[setting.nodesCol][son]);
		}
	}

	//增加子节点
	function addTreeNodes(setting, parentNode, newNodes, isSilent) {
		if (setting.keepLeaf && parentNode && !parentNode.isParent) {
			return;
		}
		if (setting.isSimpleData) {
			newNodes = transformTozTreeFormat(setting, newNodes);
		}
		if (parentNode) {
			//目标节点必须在当前树内
			if (setting.treeObj.find("#" + parentNode.tId).length == 0) return;

			target_switchObj = $("#" + parentNode.tId + IDMark_Switch);
			target_icoObj = $("#" + parentNode.tId + IDMark_Icon);
			target_aObj = $("#" + parentNode.tId + IDMark_A);
			target_ulObj = $("#" + parentNode.tId + IDMark_Ul);

			//处理节点在目标节点的图片、线
			if (!parentNode.open) {
				replaceSwitchClass(target_switchObj, FolderMark_Close);
				replaceIcoClass(parentNode, target_icoObj, FolderMark_Close);			
				parentNode.open = false;
				target_ulObj.css({
					"display": "none"
				});
			}
			
			//如果目标节点不是父节点，增加树节点展开、关闭事件
			if (!parentNode.isParent) {
				target_switchObj.unbind('click');
				target_switchObj.bind('click', {
					treeObjId: setting.treeObjId,
					treeNode: parentNode
				},
				onSwitchNode);
				target_aObj.unbind('dblclick');
				target_aObj.bind('dblclick', {
					treeObjId: setting.treeObjId,
					treeNode: parentNode
				},
				onSwitchNode);
			}

			addTreeNodesData(setting, parentNode, newNodes);
			initTreeNodes(setting, parentNode.level + 1, newNodes, parentNode);
			//如果选择某节点，则必须展开其全部父节点
			if (!isSilent) {
				expandCollapseParentNode(setting, parentNode, true);
			}
		} else {
			addTreeNodesData(setting, setting.root, newNodes);
			initTreeNodes(setting, 0, newNodes, null);
		}
	}

	//增加节点数据
	function addTreeNodesData(setting, parentNode, treenodes) {
		if (!parentNode[setting.nodesCol]) parentNode[setting.nodesCol] = [];
		if (parentNode[setting.nodesCol].length > 0) {
			parentNode[setting.nodesCol][parentNode[setting.nodesCol].length - 1].isLastNode = false;
			setNodeLineIcos(setting, parentNode[setting.nodesCol][parentNode[setting.nodesCol].length - 1]);
		}
		parentNode.isParent = true;
		parentNode[setting.nodesCol] = parentNode[setting.nodesCol].concat(treenodes);
	}

	//移动子节点
	function moveTreeNode(setting, targetNode, treeNode, moveType, animateSign) {
		if (targetNode == treeNode) return;
		if (setting.keepLeaf && targetNode && !targetNode.isParent && moveType == MoveType_Inner) return;
		var oldParentNode = treeNode.parentNode == null ? setting.root: treeNode.parentNode;
		
		var targetNodeIsRoot = (targetNode === null || targetNode == setting.root);
		if (targetNodeIsRoot && targetNode === null) targetNode = setting.root;
		if (targetNodeIsRoot) moveType = MoveType_Inner;
		var targetParentNode = (targetNode.parentNode ? targetNode.parentNode : setting.root);

		if (moveType != MoveType_Before && moveType != MoveType_After) {
			moveType = MoveType_Inner;
		}
		
		//进行数据结构修正
		var tmpSrcIndex = -1;
		var tmpTargetIndex = 0;
		var oldNeighbor = null;
		var newNeighbor = null;
		if (treeNode.isFirstNode) {
			tmpSrcIndex = 0;
			if (oldParentNode[setting.nodesCol].length > 1 ) {
				oldNeighbor = oldParentNode[setting.nodesCol][1];
				oldNeighbor.isFirstNode = true;
			}
		} else if (treeNode.isLastNode) {
			tmpSrcIndex = oldParentNode[setting.nodesCol].length -1;
			oldNeighbor = oldParentNode[setting.nodesCol][tmpSrcIndex - 1];
			oldNeighbor.isLastNode = true;
		} else {
			for (var i = 0; i < oldParentNode[setting.nodesCol].length; i++) {
				if (oldParentNode[setting.nodesCol][i].tId == treeNode.tId) tmpSrcIndex = i;
			}
		}
		if (tmpSrcIndex >= 0) {
			oldParentNode[setting.nodesCol].splice(tmpSrcIndex, 1);
		}
		if (moveType != MoveType_Inner) {
			for (var i = 0; i < targetParentNode[setting.nodesCol].length; i++) {
				if (targetParentNode[setting.nodesCol][i].tId == targetNode.tId) tmpTargetIndex = i;
			}
		}
		var targetIsNewParent = false;
		if (moveType == MoveType_Inner) {
			if (targetNodeIsRoot) {
				//成为根节点，则不操作目标节点数据
				treeNode.parentNode = null;
			} else {
				targetIsNewParent = !targetNode.isParent;
				targetNode.isParent = true;
				treeNode.parentNode = targetNode;
			}
			
			if (!targetNode[setting.nodesCol]) targetNode[setting.nodesCol] = new Array();
			if (targetNode[setting.nodesCol].length > 0) {
				newNeighbor = targetNode[setting.nodesCol][targetNode[setting.nodesCol].length - 1];
				newNeighbor.isLastNode = false;
			}
			targetNode[setting.nodesCol].splice(targetNode[setting.nodesCol].length, 0, treeNode);
			treeNode.isLastNode = true;
			treeNode.isFirstNode = (targetNode[setting.nodesCol].length == 1);
		} else if (targetNode.isFirstNode && moveType == MoveType_Before) {
			targetParentNode[setting.nodesCol].splice(tmpTargetIndex, 0, treeNode);
			newNeighbor = targetNode;
			newNeighbor.isFirstNode = false;
			treeNode.parentNode = targetNode.parentNode;
			treeNode.isFirstNode = true;
			treeNode.isLastNode = false;
			
		} else if (targetNode.isLastNode && moveType == MoveType_After) {
			targetParentNode[setting.nodesCol].splice(tmpTargetIndex + 1, 0, treeNode);
			newNeighbor = targetNode;
			newNeighbor.isLastNode = false;
			treeNode.parentNode = targetNode.parentNode;
			treeNode.isFirstNode = false;
			treeNode.isLastNode = true;
			
		} else {
			if (moveType == MoveType_Before) {
				targetParentNode[setting.nodesCol].splice(tmpTargetIndex, 0, treeNode);
			} else {
				targetParentNode[setting.nodesCol].splice(tmpTargetIndex + 1, 0, treeNode);
			}
			treeNode.parentNode = targetNode.parentNode;
			treeNode.isFirstNode = false;
			treeNode.isLastNode = false;
		}
		fixParentKeyValue(setting, treeNode);
		
		setSonNodeLevel(setting, treeNode.parentNode, treeNode);
		
		//进行HTML结构修正
		var src_switchObj = $("#" + treeNode.tId + IDMark_Switch);
		var src_ulObj = $("#" + treeNode.tId + IDMark_Ul);

		var targetObj;
		var target_switchObj;
		var target_icoObj;
		var target_aObj;
		var target_ulObj;

		if (targetNodeIsRoot) {
			//转移到根节点
			targetObj = setting.treeObj;
			target_ulObj = targetObj;
		} else {
			//转移到子节点
			targetObj = $("#" + targetNode.tId);
			target_switchObj = $("#" + targetNode.tId + IDMark_Switch);
			target_icoObj = $("#" + targetNode.tId + IDMark_Icon);
			target_aObj = $("#" + targetNode.tId + IDMark_A);
			target_ulObj = $("#" + targetNode.tId + IDMark_Ul);
		}
		
		//处理目标节点
		if (moveType == MoveType_Inner) {
			replaceSwitchClass(target_switchObj, FolderMark_Open);
			replaceIcoClass(targetNode, target_icoObj, FolderMark_Open);
			targetNode.open = true;
			target_ulObj.css({"display":"block"});
			//如果目标节点不是父节点，且不是根，增加树节点展开、关闭事件
			if (targetIsNewParent && !targetNodeIsRoot) {
				target_switchObj.unbind('click');
				target_switchObj.bind('click',{
					treeObjId: setting.treeObjId,
					treeNode: targetNode
				},
				onSwitchNode);
				target_aObj.unbind('dblclick');
				target_aObj.bind('dblclick', {
					treeObjId: setting.treeObjId,
					treeNode: targetNode
				},
				onSwitchNode);
			}
			target_ulObj.append($("#" + treeNode.tId).detach());
		} else if (moveType == MoveType_Before) {
			targetObj.before($("#" + treeNode.tId).detach());
			
		} else if (moveType == MoveType_After) {
			targetObj.after($("#" + treeNode.tId).detach());
		}

		//处理被移动的节点
		setNodeLineIcos(setting, treeNode);
		
		//处理原节点的父节点
		if (!setting.keepParent && oldParentNode[setting.nodesCol].length < 1) {
			//原所在父节点无子节点
			oldParentNode.isParent = false;
			var tmp_ulObj = $("#" + oldParentNode.tId + IDMark_Ul);
			var tmp_switchObj = $("#" + oldParentNode.tId + IDMark_Switch);
			var tmp_icoObj = $("#" + oldParentNode.tId + IDMark_Icon);
			replaceSwitchClass(tmp_switchObj, FolderMark_Docu);
			replaceIcoClass(oldParentNode, tmp_icoObj, FolderMark_Docu);
			tmp_ulObj.css("display", "none");

		} else if (oldNeighbor) {
			//原所在位置需要处理的相邻节点
			setNodeLineIcos(setting, oldNeighbor);
		}
		
		//处理目标节点的相邻节点
		if (newNeighbor) {
			setNodeLineIcos(setting, newNeighbor);
		}
		
		//修正父节点Check状态
		if (setting.checkable) {
			repairChkClass(setting, oldParentNode);
			repairParentChkClassWithSelf(setting, oldParentNode);
			if (oldParentNode != treeNode.parent) 
				repairParentChkClassWithSelf(setting, treeNode);
		}
		
		//移动后，则必须展开新位置的全部父节点
		expandCollapseParentNode(setting, treeNode.parentNode, true, animateSign);
	}
	
	//修正pId
	function fixParentKeyValue(setting, treeNode) {
		if (setting.isSimpleData) {
			treeNode[setting.treeNodeParentKey] = treeNode.parentNode ? treeNode.parentNode[setting.treeNodeKey] : setting.rootPID;
		}
	}
	
	//编辑子节点名称
	function editTreeNode(setting, treeNode) {
		treeNode.editNameStatus = true;
		selectNode(setting, treeNode);
	}

	//删除子节点
	function removeTreeNode(setting, treeNode) {
		var parentNode = treeNode.parentNode == null ? setting.root: treeNode.parentNode;
		if (setting.curTreeNode === treeNode) setting.curTreeNode = null;
		if (setting.curEditTreeNode === treeNode) setting.curEditTreeNode = null;

		$("#" + treeNode.tId).remove();

		//进行数据结构修正
		var tmpSrcIndex = -1;
		for (var i = 0; i < parentNode[setting.nodesCol].length; i++) {
			if (parentNode[setting.nodesCol][i].tId == treeNode.tId) tmpSrcIndex = i;
		}
		if (tmpSrcIndex >= 0) {
			parentNode[setting.nodesCol].splice(tmpSrcIndex, 1);
		}

		//处理原节点的父节点的图标、线
		if (!setting.keepParent && parentNode[setting.nodesCol].length < 1) {
			//原所在父节点无子节点
			parentNode.isParent = false;
			parentNode.open = false;
			var tmp_ulObj = $("#" + parentNode.tId + IDMark_Ul);
			var tmp_switchObj = $("#" + parentNode.tId + IDMark_Switch);
			var tmp_icoObj = $("#" + parentNode.tId + IDMark_Icon);
			replaceSwitchClass(tmp_switchObj, FolderMark_Docu);
			replaceIcoClass(parentNode, tmp_icoObj, FolderMark_Docu);
			tmp_ulObj.css("display", "none");

		} else if (setting.showLine && parentNode[setting.nodesCol].length > 0) {
			//原所在父节点有子节点
			parentNode[setting.nodesCol][parentNode[setting.nodesCol].length - 1].isLastNode = true;
			parentNode[setting.nodesCol][parentNode[setting.nodesCol].length - 1].isFirstNode = (parentNode[setting.nodesCol].length == 1);
			var tmp_ulObj = $("#" + parentNode[setting.nodesCol][parentNode[setting.nodesCol].length - 1].tId + IDMark_Ul);
			var tmp_switchObj = $("#" + parentNode[setting.nodesCol][parentNode[setting.nodesCol].length - 1].tId + IDMark_Switch);
			var tmp_icoObj = $("#" + parentNode[setting.nodesCol][parentNode[setting.nodesCol].length - 1].tId + IDMark_Icon);
			if (parentNode == setting.root) {
				if (parentNode[setting.nodesCol].length == 1) {
					//原为根节点 ，且移动后只有一个根节点
					replaceSwitchClass(tmp_switchObj, LineMark_Root);
				} else {
					var tmp_first_switchObj = $("#" + parentNode[setting.nodesCol][0].tId + IDMark_Switch);
					replaceSwitchClass(tmp_first_switchObj, LineMark_Roots);
					replaceSwitchClass(tmp_switchObj, LineMark_Bottom);
				}

			} else {
				replaceSwitchClass(tmp_switchObj, LineMark_Bottom);
			}

			tmp_ulObj.removeClass(LineMark_Line);
		}
	}

	//根据 tId 获取 节点的数据对象
	function getTreeNodeByTId(setting, treeId) {
		return getTreeNodeByParam(setting, setting.root[setting.nodesCol], "tId", treeId);
	}
	//根据唯一属性 获取 节点的数据对象
	function getTreeNodeByParam(setting, treeNodes, key, value) {
		if (!treeNodes || !key) return null;
		for (var i = 0; i < treeNodes.length; i++) {
			if (treeNodes[i][key] == value) {
				return treeNodes[i];
			}
			var tmp = getTreeNodeByParam(setting, treeNodes[i][setting.nodesCol], key, value);
			if (tmp) return tmp;
		}
		return null;
	}
	//根据属性 获取 节点的数据对象集合
	function getTreeNodesByParam(setting, treeNodes, key, value) {
		if (!treeNodes || !key) return [];
		var result = [];
		for (var i = 0; i < treeNodes.length; i++) {
			if (treeNodes[i][key] == value) {
				result.push(treeNodes[i]);
			}
			result = result.concat(getTreeNodesByParam(setting, treeNodes[i][setting.nodesCol], key, value));
		}
		return result;
	}
	//根据属性 模糊搜索获取 节点的数据对象集合（仅限String）
	function getTreeNodesByParamFuzzy(setting, treeNodes, key, value) {
		if (!treeNodes || !key) return [];
		var result = [];
		for (var i = 0; i < treeNodes.length; i++) {
			if (typeof treeNodes[i][key] == "string" && treeNodes[i][key].indexOf(value)>-1) {
				result.push(treeNodes[i]);
			}
			result = result.concat(getTreeNodesByParamFuzzy(setting, treeNodes[i][setting.nodesCol], key, value));
		}
		return result;
	}

	//取消之前选中节点状态
	function cancelPreSelectedNode(setting) {
		if (setting.curTreeNode) {
			$("#" + setting.curTreeNode.tId + IDMark_A).removeClass(Class_CurSelectedNode);
			$("#" + setting.curTreeNode.tId + IDMark_Span).text(setting.curTreeNode[setting.nameCol]);
			removeTreeDom(setting, setting.curTreeNode);
			setting.curTreeNode = null;
		}
	}
	//取消之前编辑节点状态
	function cancelPreEditNode(setting) {
		if (setting.curEditTreeNode) {
			$("#" + setting.curEditTreeNode.tId + IDMark_A).removeClass(Class_CurSelectedNode_Edit);
			$("#" + setting.curEditTreeNode.tId + IDMark_Input).unbind();
			$("#" + setting.curEditTreeNode.tId + IDMark_Span).text(setting.curEditTreeNode[setting.nameCol]);
			setting.curEditTreeNode.editNameStatus = false;
			setting.curEditTreeNode = null;
		}
	}
	
	//设置节点为当前选中节点
	function selectNode(setting, treeNode) {
		if (setting.curTreeNode == treeNode && !treeNode.editNameStatus) return;
		
		cancelPreSelectedNode(setting);	
		cancelPreEditNode(setting);
			
		if (setting.editable && treeNode.editNameStatus) {
			$("#" + treeNode.tId + IDMark_Span).html("<input type=text class='rename' id='" + treeNode.tId + IDMark_Input + "'>");
			
			var inputObj = $("#" + treeNode.tId + IDMark_Input);
			inputObj.attr("value", treeNode[setting.nameCol]);
			inputObj.focus();
			setCursorPosition(inputObj.get(0), treeNode[setting.nameCol].length);
			
			//拦截A的click dblclick监听
			inputObj.bind('blur', function(event) {
				editNameOver(this.value, setting, treeNode);
			}).bind('keypress', function(event) {
				if (event.keyCode=="13") {
					editNameOver(this.value, setting, treeNode);
				}
			}).bind('click', function(event) {
				return false;
			}).bind('dblclick', function(event) {
				return false;
			});
			
			$("#" + treeNode.tId + IDMark_A).addClass(Class_CurSelectedNode_Edit);
			setting.curEditTreeNode = treeNode;
		} else {
			$("#" + treeNode.tId + IDMark_A).addClass(Class_CurSelectedNode);
		}
		addTreeDom(setting, treeNode);
		setting.curTreeNode = treeNode;
	}
	
	//编辑名称结束
	function editNameOver(newName, setting, treeNode) {
		treeNode[setting.nameCol] = newName;
		//触发rename事件
		setting.treeObj.trigger(ZTREE_RENAME, [setting.treeObjId, treeNode]);
		selectNode(setting, treeNode);
	}
	
	//获取全部 checked = true or false 的节点集合
	function getTreeCheckedNodes(setting, treeNodes, checked) {
		if (!treeNodes) return [];
		var results = [];
		for (var i = 0; i < treeNodes.length; i++) {
			if (treeNodes[i][setting.checkedCol] == checked) {
				results = results.concat([treeNodes[i]]);
			}
			var tmp = getTreeCheckedNodes(setting, treeNodes[i][setting.nodesCol], checked);
			if (tmp.length > 0) results = results.concat(tmp);
		}
		return results;
	}
	
	//获取全部 被修改Check状态 的节点集合
	function getTreeChangeCheckedNodes(setting, treeNodes) {
		if (!treeNodes) return [];
		var results = [];
		for (var i = 0; i < treeNodes.length; i++) {
			if (treeNodes[i][setting.checkedCol] != treeNodes[i].checkedOld) {
				results = results.concat([treeNodes[i]]);
			}
			var tmp = getTreeChangeCheckedNodes(setting, treeNodes[i][setting.nodesCol]);
			if (tmp.length > 0) results = results.concat(tmp);
		}
		return results;
	}
	
	//简要数据转换为标准JSON数组
	function transformTozTreeFormat(setting, simpleTreeNodes) {
		var key = setting.treeNodeKey;
		var parentKey = setting.treeNodeParentKey;
		if (!key || key=="" || !simpleTreeNodes) return [];
		
		if (Object.prototype.toString.apply(simpleTreeNodes) === "[object Array]") {
			var r = [];
			var tmpMap = [];
			for (var i=0; i<simpleTreeNodes.length; i++) {
				tmpMap[simpleTreeNodes[i][key]] = simpleTreeNodes[i];
			}
			for (var i=0; i<simpleTreeNodes.length; i++) {
				if (tmpMap[simpleTreeNodes[i][parentKey]]) {
					if (!tmpMap[simpleTreeNodes[i][parentKey]][setting.nodesCol])
						tmpMap[simpleTreeNodes[i][parentKey]][setting.nodesCol] = [];
					tmpMap[simpleTreeNodes[i][parentKey]][setting.nodesCol].push(simpleTreeNodes[i]);
				} else {
					r.push(simpleTreeNodes[i]);
				}
			}
			return r;
		} else {
			return [simpleTreeNodes];
		}
	}
	
	//标准JSON zTreeNode 数组转换为普通Array简要数据
	function transformToArrayFormat(setting, treeNodes) {
		if (!treeNodes) return [];
		var r = [];
		if (Object.prototype.toString.apply(treeNodes) === "[object Array]") {
			for (var i=0; i<treeNodes.length; i++) {
				r.push(treeNodes[i]);
				if (treeNodes[i][setting.nodesCol])
					r = r.concat(transformToArrayFormat(setting, treeNodes[i][setting.nodesCol]));
			}
		} else {
			r.push(treeNodes);
			if (treeNodes[setting.nodesCol])
				r = r.concat(transformToArrayFormat(setting, treeNodes[setting.nodesCol]));
		}
		return r;
	}

	function zTreePlugin(){
		return {
			container:null,
			setting:null,

			init: function(obj) {
				this.container = obj;
				this.setting = settings[obj.attr("id")];
				return this;
			},

			refresh : function() {
				this.setting.treeObj.empty();
				this.setting.curTreeNode = null;
				this.setting.curEditTreeNode = null;
				this.setting.dragStatus = 0;
				this.setting.dragNodeShowBefore = false;
				this.setting.checkRadioCheckedList = [];
				zTreeId = 0;
				initTreeNodes(this.setting, 0, this.setting.root[this.setting.nodesCol]);
			},

			setEditable : function(editable) {
				this.setting.editable = editable;
				return this.refresh();
			},
			
			transformTozTreeNodes : function(simpleTreeNodes) {
				return transformTozTreeFormat(this.setting, simpleTreeNodes);
			},
			
			transformToArray : function(treeNodes) {
				return transformToArrayFormat(this.setting, treeNodes);
			},

			getNodes : function() {
				return this.setting.root[this.setting.nodesCol];
			},

			getSelectedNode : function() {
				return this.setting.curTreeNode;
			},

			getCheckedNodes : function(selected) {
				selected = (selected != false);
				return getTreeCheckedNodes(this.setting, this.setting.root[this.setting.nodesCol], selected);
			},
			
			getChangeCheckedNodes : function() {
				return getTreeChangeCheckedNodes(this.setting, this.setting.root[this.setting.nodesCol]);
			},

			getNodeByTId : function(treeId) {
				if (!treeId) return;
				return getTreeNodeByTId(this.setting, treeId);
			},
			getNodeByParam : function(key, value) {
				if (!key) return;
				return getTreeNodeByParam(this.setting, this.setting.root[this.setting.nodesCol], key, value);
			},
			getNodesByParam : function(key, value) {
				if (!key) return;
				return getTreeNodesByParam(this.setting, this.setting.root[this.setting.nodesCol], key, value);
			},
			getNodesByParamFuzzy : function(key, value, parentNode) {
				if (!key) return;
				return getTreeNodesByParamFuzzy(this.setting, parentNode?parentNode[this.setting.nodesCol]:this.setting.root[this.setting.nodesCol], key, value);
			},
			
			getNodeIndex : function(treeNode) {
				if (!treeNode) return;
				var parentNode = (treeNode.parentNode == null) ? this.setting.root : treeNode.parentNode;
				for (var i=0; i<parentNode[this.setting.nodesCol].length; i++) {
					if (parentNode[this.setting.nodesCol][i] == treeNode) return i;
				}
				return -1;
			},
			
			getSetting : function() {
				var zTreeSetting = this.setting;
				var setting = {checkType:{}, callback:{}};
				
				var tmp_checkType = zTreeSetting.checkType;
				zTreeSetting.checkType = undefined;
				var tmp_callback = zTreeSetting.callback;
				zTreeSetting.callback = undefined;
				var tmp_root = zTreeSetting.root;
				zTreeSetting.root = undefined;
				
				$.extend(setting, zTreeSetting);
				
				zTreeSetting.checkType = tmp_checkType;				
				zTreeSetting.callback = tmp_callback;				
				zTreeSetting.root = tmp_root;				

				//不能获取root信息
				$.extend(true, setting.checkType, tmp_checkType);
				$.extend(setting.callback, tmp_callback);
				
				return setting;
			},
			
			updateSetting : function(zTreeSetting) {
				if (!zTreeSetting) return;
				var setting = this.setting;
				var treeObjId = setting.treeObjId;
				
				var tmp_checkType = zTreeSetting.checkType;
				zTreeSetting.checkType = undefined;
				var tmp_callback = zTreeSetting.callback;
				zTreeSetting.callback = undefined;
				var tmp_root = zTreeSetting.root;
				zTreeSetting.root = undefined;
				
				$.extend(setting, zTreeSetting);
				
				zTreeSetting.checkType = tmp_checkType;				
				zTreeSetting.callback = tmp_callback;				
				zTreeSetting.root = tmp_root;				
				
				//不提供root信息update
				$.extend(true, setting.checkType, tmp_checkType);
				$.extend(setting.callback, tmp_callback);
				setting.treeObjId = treeObjId;
				setting.treeObj = this.container;
				
			},

			expandAll : function(expandSign) {
				expandCollapseSonNode(this.setting, null, expandSign, true);
			},

			expandNode : function(treeNode, expandSign, sonSign) {
				if (!treeNode) return;

				if (expandSign) {
					//如果展开某节点，则必须展开其全部父节点
					//为了保证效率,展开父节点时不使用动画
					if (treeNode.parentNode) expandCollapseParentNode(this.setting, treeNode.parentNode, expandSign, false);
				}
				if (sonSign) {
					//多个图层同时进行动画，导致产生的延迟很难用代码准确捕获动画最终结束时间
					//因此为了保证准确将节点focus进行定位，则对于js操作节点时，不进行动画
					expandCollapseSonNode(this.setting, treeNode, expandSign, false, function() {
						$("#" + treeNode.tId + IDMark_Icon).focus().blur();
					});
				} else if (treeNode.open != expandSign) {
					switchNode(this.setting, treeNode);
					$("#" + treeNode.tId + IDMark_Icon).focus().blur();
				}
			},

			selectNode : function(treeNode) {
				if (!treeNode) return;

				selectNode(this.setting, treeNode);
				//如果选择某节点，则必须展开其全部父节点
				//多个图层同时进行动画，导致产生的延迟很难用代码准确捕获动画最终结束时间
				//因此为了保证准确将节点focus进行定位，则对于js操作节点时，不进行动画
				if (treeNode.parentNode) {
					expandCollapseParentNode(this.setting, treeNode.parentNode, true, false, function() {
						$("#" + treeNode.tId + IDMark_Icon).focus().blur();
					});
				} else {
					$("#" + treeNode.tId + IDMark_Icon).focus().blur();
				}
			},
			
			cancleSelectedNode : function() {
				this.cancelSelectedNode();
			},
			cancelSelectedNode : function() {
				cancelPreSelectedNode(this.setting);
			},
			
			checkAllNodes : function(checked) {
				repairAllChk(this.setting, checked);
			},
			
			reAsyncChildNodes : function(parentNode, reloadType) {
				if (!this.setting.async) return;
				var isRoot = !parentNode;
				if (isRoot) {
					parentNode = this.setting.root;
				}
				if (reloadType=="refresh") {
					parentNode[this.setting.nodesCol] = [];
					if (isRoot) {
						this.setting.treeObj.empty();
					} else {
						var ulObj = $("#" + parentNode.tId + IDMark_Ul);
						ulObj.empty();
					}
				}
				asyncGetNode(this.setting, isRoot? null:parentNode);
			},

			addNodes : function(parentNode, newNodes, isSilent) {
				if (!newNodes) return;
				if (!parentNode) parentNode = null;
				var xNewNodes = (Object.prototype.toString.apply(newNodes) === "[object Array]")? newNodes: [newNodes];
				addTreeNodes(this.setting, parentNode, xNewNodes, (isSilent==true));
			},
			
			updateNode : function(treeNode, checkTypeFlag) {
				if (!treeNode) return;
				var checkObj = $("#" + treeNode.tId + IDMark_Check);
				if (this.setting.checkable) {
					if (checkTypeFlag == true) checkNodeRelation(this.setting, treeNode);
					setChkClass(this.setting, checkObj, treeNode);
					repairParentChkClassWithSelf(this.setting, treeNode);
				}
				setNodeName(this.setting, treeNode);
				setNodeTarget(treeNode);
				setNodeUrl(this.setting, treeNode);
				setNodeLineIcos(this.setting, treeNode);
				setNodeFontCss(this.setting, treeNode);
			},

			moveNode : function(targetNode, treeNode, moveType) {
				if (!treeNode) return;
				
				if (targetNode && ((treeNode.parentNode == targetNode && moveType == MoveType_Inner) || $("#" + treeNode.tId).find("#" + targetNode.tId).length > 0)) {
					return;
				} else if (!targetNode) {
					targetNode = null;
				}
				moveTreeNode(this.setting, targetNode, treeNode, moveType, false);
			},

			removeNode : function(treeNode) {
				if (!treeNode) return;
				removeTreeNode(this.setting, treeNode);
			}

		};
	};
})(jQuery);