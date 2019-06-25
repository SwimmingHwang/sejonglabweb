module.exports = {
    isOwner:function(request, response) {
        if (request.user) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
        var authStatusUI = '<a href="/login">로그인</a>'
        if (this.isOwner(request, response)) {
            console.log('hell', request.user);
            authStatusUI = `${request.user.id} <br /><a href="/logout">로그아웃</a>`;
        }
        return authStatusUI;
    }
}