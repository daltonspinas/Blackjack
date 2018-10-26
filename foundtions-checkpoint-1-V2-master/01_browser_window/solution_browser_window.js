function BrowserWindow(accountName, windowName, tabs = [{tabURL: 'defaultHomePage.com'}]){
this.accountName = accountName;
this.windowName = windowName;
this.tabs = tabs;



BrowserWindow.prototype.joinWindows = function(urlObj){
    
    this.tabs.push(...urlObj.tabs);
}
BrowserWindow.prototype.newTab = function(nt){
    this.tabs.push({tabURL: nt});
}
BrowserWindow.prototype.closeTab = function(idx){
    this.tabs.splice(idx,1);
    if(this.tabs.length === 0){
        this.tabs= [{tabURL: 'defaultHomePage.com'}];
    }


    
}
}
