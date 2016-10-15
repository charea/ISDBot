/**
 * Created by dcebotarenco on 9/19/2016.
 */
var Button = require('../view/Button');
var Menu = require('../view/Menu');
var MenusView = require('../view/MenusView');
var Logger = require('../logger/logger');

class MenusFactory {
    static buildMenus(session,day) {
        Logger.logger().info("Building Day Menus");
        let menuList = [];
        day.menuList.forEach(function(menu,index){
            let buttonList = [];
            menu.mealGroups.forEach(function(group,index)
            {
                buttonList.push(new Button(session, menu.constructor.name, group.groupName));
            });
            menuList.push(new Menu(session, menu.name, menu.constructor.name, menu.mealsList, buttonList));
        });
        let dayMenu = new MenusView(session, menuList);
        Logger.logger().info("Building Day Menus Done");
        return dayMenu;
    }
}

module.exports = MenusFactory