function onbuttonclick(idStr, param) {
  switch (idStr) {
    case 'getDocName': {
      let doc = Application().ActiveDocument;
      if (!doc) {
        return '当前没有打开任何文档';
      }
      return doc.Name;
    }
    case 'createTaskPane': {
      let tsId = wps.PluginStorage.getItem('taskpane_id');
      if (!tsId) {
        let tskpane = wps.CreateTaskPane(
          `${window.location.protocol}//${window.location.host}` + '/#/taskpane'
        );
        let id = tskpane.ID;
        wps.PluginStorage.setItem('taskpane_id', id);
        tskpane.Visible = true;
      } else {
        let tskpane = wps.GetTaskPane(tsId);
        tskpane.Visible = true;
      }
      break;
    }
    case 'newDoc': {
      Application().Documents.Add();
      break;
    }
    case 'addString': {
      let doc = Application().ActiveDocument;
      if (doc) {
        doc.Range(0, 0).Text = 'Hello, wps加载项!';
        //好像是wps的bug, 这两句话触发wps重绘
        let rgSel = Application().Selection.Range;
        if (rgSel) rgSel.Select();
      }
      break;
    }
    case 'closeDoc': {
      if (Application().Documents.Count < 2) {
        alert('当前只有一个文档，别关了。');
        break;
      }

      let doc = Application().ActiveDocument;
      if (doc) doc.Close();
      break;
    }
    case 'openWeb': {
      wps.OAAssist.ShellExecute(param);
      break;
    }
  }
}

export default {
  onbuttonclick
};
