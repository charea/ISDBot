/**
 * Created by dcebotarenco on 10/6/2016.
 */
var builder = require('botbuilder');
var Logger = require('../logger/logger');

class HelpDialog {
    constructor() {
        Logger.logger().info("Creating HelpDialog Dialog");
        this.dialogs = [
            HelpDialog.showHelpCommands
        ];
    }

    static showHelpCommands(session) {
        var msg = new builder.Message(session)
            .attachments([
                new builder.HeroCard(session)
                    .title('Help')
                    .subtitle('Commands you can run')
                    .text('hi,bye,food,food (today|mo|tu|we|th|fr),food cancel (today|mo|tu|we|th|fr)')
            ]);
        session.endDialog(msg);
    }

    get dialog() {
        return this.dialogs;
    }

    static name() {
        return "/help";
    }

    static match() {
        return /help/i;
    }

}
module.exports = HelpDialog;