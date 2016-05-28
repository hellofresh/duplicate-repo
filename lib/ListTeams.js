module.exports = (function() {

    var ListTeams = function(commander) {
        this.commander = commander;
    };

    ListTeams.prototype.run = function() {
        var organization = null;
        var commander = this.commander;
        
        commander.run ()
        .then (function (organization) {
            return commander.getGithubTeams (organization);
        })
        .then (function (teams) {
            return commander.echoTable (teams, ['id', 'name', 'permission', 'description']);
        })
        .catch(function(e) {
            return commander.handleError (e);
        });
    };

    return ListTeams;

}());