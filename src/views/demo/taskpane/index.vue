<template>
  <div class="global">
    <div class="logo-icon">
      <svg-icon icon-class="logo"></svg-icon>
    </div>
    <div class="divItem">
      这是一个网页，按<span style="font-weight: bolder">"F12"</span>可以打开调试器。
    </div>
    <div class="divItem">
      这个示例展示了wps加载项的相关基础能力，与B/S业务系统的交互，请用浏览器打开：
      <span
        style="font-weight: bolder; color: slateblue; cursor: pointer"
        @click="onOpenWeb()"
        >{{ DemoSpan }}</span
      >
    </div>
    <div class="divItem">
      开发文档:
      <span style="font-weight: bolder; color: slateblue">https://open.wps.cn/docs/office</span>
    </div>
    <hr />
    <div class="divItem">
      <button
        style="margin: 3px"
        @click="onbuttonclick('dockLeft')">
        停靠左边
      </button>
      <button
        style="margin: 3px"
        @click="onbuttonclick('dockRight')">
        停靠右边
      </button>
      <button
        style="margin: 3px"
        @click="onbuttonclick('hideTaskPane')">
        隐藏TaskPane
      </button>
      <button
        style="margin: 3px"
        @click="onbuttonclick('addString')">
        文档开头添加字符串
      </button>
      <button
        style="margin: 3px"
        @click="onDocNameClick()">
        取文件名
      </button>

      <button
        style="margin: 3px"
        @click="onIndent()">
        段落缩进
      </button>

      <button
        style="margin: 3px"
        @click="onInsertTime()">
        selection插入时间
      </button>

      <button
        style="margin: 3px"
        @click="onActiveWindowDocument()">
        activeDocument
      </button>

      <button
        style="margin: 3px"
        @click="onCommentAdd()">
        add comments
      </button>

      <button
        style="margin: 3px"
        @click="onDialog()">
        add Dialog
      </button>

      <button
        style="margin: 3px"
        @click="onDocumentFields()">
        documentFields
      </button>

      <button
        style="margin: 3px"
        @click="onListCount()">
        lists count
      </button>

      <button
        style="margin: 3px"
        @click="onPage()">
        on page
      </button>

      <button
        style="margin: 3px"
        @click="onView()">
        view
      </button>

      <button
        style="margin: 3px"
        @click="onWindows()">
        windows
      </button>

      <button
        style="margin: 3px"
        @click="onXMLNOTES()">
        XML NODES
      </button>

      <button
        style="margin: 3px"
        @click="onSections()">
        Sections
      </button>

      <button
        style="margin: 3px"
        @click="onRange()">
        Range
      </button>

      <button
        style="margin: 3px"
        @click="onPane()">
        Pane
      </button>

      <button
        style="margin: 3px"
        @click="allOpenDocument()">
        all documents
      </button>

      <button
        style="margin: 3px"
        @click="toggleRevisions()">
        toggle revisions
      </button>

      <button
        style="margin: 3px"
        @click="getAllDocumentText()">
        document xml
      </button>

      <button
        style="margin: 3px"
        @click="onBatchDelete()">
        批注删除
      </button>

      <button
        style="margin: 3px"
        @click="onBatchEdit()">
        批注修改
      </button>

      <button
        style="margin: 3px"
        @click="getDocRange">
        获取Range
      </button>

      <button
        style="margin: 3px"
        @click="openDialog">
        open customDialog
      </button>

      <button
        style="margin: 3px"
        @click="closeDialog">
        close Dialog
      </button>

      <button
        style="margin: 3px"
        @click="setPosition(4)">
        setPositionCenter
      </button>

      <button
        style="margin: 3px"
        @click="setPosition(2)">
        setPositionRight
      </button>

      <button
        style="margin: 3px"
        @click="onLastParagraph">
        最后一行追加
      </button>

      <button
        style="margin: 3px"
        @click="commentShowBy">
        获取comment
      </button>

      <button
        style="margin: 3px"
        @click="gotoSelection">
        Selection goto
      </button>
    </div>
    <hr />
    <div class="divItem">
      文档文件名为：<span>{{ docName }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import taskPane from './index';
export default {
  name: 'DemoTaskPane',
  data() {
    return {
      DemoSpan: '',
      docName: ''
    };
  },
  methods: {
    onbuttonclick(id) {
      return taskPane.onbuttonclick(id);
    },
    onDocNameClick() {
      this.docName = taskPane.onbuttonclick('getDocName');
    },
    onOpenWeb() {
      taskPane.onbuttonclick('openWeb', this.DemoSpan);
    },
    onIndent() {
      Application().ActiveDocument.Paragraphs.Indent();
      Application().ActiveDocument.Paragraphs.Item(1).Outdent();
    },
    onInsertTime() {
      Application.Selection.InsertDateTime();
    },
    onActiveWindowDocument() {
      console.log(Application.ActiveDocument);
      console.log(Application.ActiveDocument.ActiveWindow);
      console.log(Application.ActiveDocument.ActiveWindow === Application.ActiveWindow);
    },
    onCommentAdd() {
      let comment = Application.ActiveDocument.Comments.Add(
        Application.Selection.Range,
        '添加批注测试'
      );
      if (!comment.IsInk) {
        comment.Author = 'AI';
      }
      comment.Scope.Select();
    },
    onBorder() {
      console.log(Application.ActiveDocument.Paragraphs);
      let borders = Application.ActiveDocument.Paragraphs.Item(3).Borders.Item(-3);
      console.log(borders);
      borders.LineStyle = 7;
      borders.LineWidth = 6;
    },
    onDialog() {
      Application.Dialogs.Item(80).Show();
    },
    onDocumentFields() {
      console.log(Application.ActiveDocument.DocumentFields);
      console.log(Application.ActiveDocument.DocumentFields.Item(1));
    },
    onListCount() {
      // console.log(Application.ActiveDocument.Lists.Count)
      Application.ActiveDocument.Lists.Item(1).Range.Underline = 3;
    },
    onPage() {
      let pageRectangles =
        Application.ActiveDocument.ActiveWindow.Panes.Item(1).Pages.Item(1).Rectangles;
      console.log('rect angles ---> ', pageRectangles);
    },
    onView() {
      let view = Application.ActiveDocument.ActiveWindow.View;
      console.log(view);
      Application.ActiveDocument.ActiveWindow.View.Zoom.Percentage = 200;
    },
    onWindows() {
      Application.Windows.Add(Application.Documents.Item('xxxxxxx.docx').Windows.Item(1));
    },
    onXMLNOTES() {
      let objNode = Application.ActiveDocument.XMLNodes;
      console.log(objNode);
      console.log(objNode.ChildNodes);
      console.log(JSON.stringify(objNode.ChildNodes));
    },
    onSections() {
      // let myRange = Application.ActiveDocument.Paragraphs.Item(10).Range;
      // console.log('Application.ActiveDocument.Paragraphs.Item(10).Range ',myRange)
      // Application.ActiveDocument.Sections.Add(myRange)

      let sections = Application.ActiveDocument.Sections;
      console.log(sections.Item(1).Index);
      console.log(sections.Item(1).Footers);
      console.log(sections.Item(1).Headers);
      console.log(sections.Item(1).Borders);
      console.log(sections.Item(1).Range);
    },
    onRange() {
      Application.ActiveDocument.Paragraphs.Item(3).Range.Select();
      // Application.Selection.Font.Bold = true;
      let range = Application.ActiveDocument.Paragraphs.Item(3).Range;
      //  console.log('Range xml', Application.ActiveDocument.Paragraphs.Item(3).Range.XML())

      console.log('Range 	Collapse', range.Text);
      console.log('range WordOpenXML', range.WordOpenXML);
      console.log('range Words', range.Words, range.Words.Count);
      console.log('range XMLNodes ', range.XMLNodes);

      for (let i = 3; i < 10; i++) {
        const currentRange = Application.ActiveDocument.Paragraphs.Item(i).Next().Range;
        console.log(`index ${i + 1}`, currentRange.Text);
      }
    },
    onPane() {
      let activeWindow = Application.ActiveDocument.ActiveWindow;
      activeWindow.SplitVertical = 50;
      activeWindow.Panes.Item(1).Activate();
    },
    allOpenDocument() {
      let documents = Application.Documents;
      for (let i = 0; i < documents.Count; i++) {
        console.log('original documents', documents.Item(i + 1).OriginalDocumentTitle);
        console.log('RevisedDocumentTitle documents', documents.Item(i + 1).RevisedDocumentTitle);
        console.log(' documents Name', documents.Item(i + 1).Name);
      }

      console.log(Application.ActiveDocument.Content.Text);
    },
    toggleRevisions() {
      Application.ActiveDocument.TrackRevisions = !Application.ActiveDocument.TrackRevisions;
    },

    getAllDocumentText() {
      console.log('get all documents');
      console.log(Application.ActiveDocument.WordOpenXML);
    },
    onBatchDelete() {
      Application.ActiveDocument.Comments.Item(1).Delete();
    },
    onBatchEdit() {
      Application.ActiveDocument.Comments.Item(1).Range.InsertBefore('test');
    },

    // event
    onContentChangeHandle(doc, range, type) {
      console.log('--------- content  change handle ---->> start');
      console.log('doc', doc);
      console.log('range', range);
      console.log('type', type);
      console.log('--------- content  change handle ---->> end');
    },

    getDocRange() {
      let range = this.getRangeByIndex(100, 105);
      console.log(range.Text);
    },
    getRangeByIndex(start_index, end_index) {
      let range = Application.ActiveDocument.Range(start_index, end_index);
      return range;
    },
    openDialog() {
      let width = 400 * window.devicePixelRatio;
      let height = 300 * window.devicePixelRatio;
      let result = Application.ShowDialog('https://www.wps.cn', 'wps网站', width, height, false);
      console.log('dialog', result);
    },
    closeDialog() {
      console.log(Application.Dialogs);
      console.log(Application.Dialogs.Item(1).CommandName);
      console.log(Application.Dialogs.Item(1).Type);
    },
    setPosition(number) {
      let id = wps.PluginStorage.getItem('taskpane_id_demo');
      let pane = wps.GetTaskPane(id);
      console.log(pane);
      pane.DockPosition = 1 || 4 || number;
      //pane.DockPosition = 4 || 4;
      setTimeout(() => {
        pane.DockPosition = 4;
      }, 1000);
    },
    onLastParagraph() {
      let paragraph = Application.ActiveDocument.Paragraphs.Last;
      paragraph.Range.InsertAfter('-最后一行');
    },
    commentShowBy() {
      let comment = Application.ActiveDocument.Comments.Item(1);

      console.log('>>>> comment ', comment);
      console.log('comment.Range.Text >>', comment.Range.Text);
      console.log('comment.Reference.Text >>', comment.Reference.Text);
      console.log('comment.Scope.Text >>', comment.Scope.Text);
      console.log('comment.Replies', comment.Replies.Item(1).Author);
    },
    gotoSelection() {
      console.log(wps);
      console.log(wps.WpsWdGoToItem);
      Application.Selection.GoTo(6, 2);
    }
  },
  mounted() {
    axios.get('/.debugTemp/NotifyDemoUrl').then((res) => {
      this.DemoSpan = res.data;
    });
    Application.ApiEvent.AddApiEventListener('ContentChange', this.onContentChangeHandle);
  },
  beforeDestroy() {
    Application.ApiEvent.RemoveApiEventListener('ContentChange', this.onContentChangeHandle);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.global {
  font-size: 15px;
  min-height: 95%;
}
.divItem {
  margin-left: 5px;
  margin-bottom: 18px;
  font-size: 15px;
  word-wrap: break-word;
}
.logo-icon {
  text-align: center;
}
.logo-icon .svg-icon {
  width: 100px;
  height: 100px;
}
</style>
