
defineClass("ViewController", {
            
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
            }
            cell.textLabel().setText("meijiaqing");
            var redColor = require('UIColor').redColor();
            cell.setBackgroundColor(redColor);
            return cell
            },
            
            //instance method definitions
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            var row = indexPath.row()
            if (self.dataSource().length > row) {  // 加上判断越界的逻辑
            var content = self.dataArr()[row];
            }
            },
            tableView_didDeselectRowAtIndexPath: function(tableView,indexPath){
            
            },
            tableView_numberOfRowsInSection: function(tableView,section) {
            return 5
            },
            tableView_heightForRowAtIndexPath: function(tableView,indexPath) {
            var row = indexPath.row()
            if (row%2 == 0) {  // 加上判断越界的逻辑
            return 100
            }else{
            return 44
            }
            }
            },{});
