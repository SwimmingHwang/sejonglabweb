module.exports = {
    isOwner:function(request, response) {
        if (request.user) {
            return true;
        } else {
            return false;
        }
    },
    statusUI:function(request, response) {
        var authStatusUI = '<a href="/join">회원가입</a> <a href="/login">로그인</a>'
        if (this.isOwner(request, response)) {
            console.log('hell', request.user);
            authStatusUI = `<button class="mypageBut" onclick="window.location='/prof_management';">마이페이지</button> <br /><a href="/logout">로그아웃</a>`;
        }
        return authStatusUI;
    }
}