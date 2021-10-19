$(document).click(function (e) {
    $('.post-pop-plane').removeClass("post-pop-plane-show");
});


function toggleSidebar(sel){
    $('.sidebar').toggleClass('sidebar-display');
    $('.post-main').toggleClass('post-main-full');
    $(this).toggleClass('post-info-switch-sidebar-show');
}

$('.clickshow').click(function () {
    $('#share-plane').removeClass("share-plane-show");
    $('#qrcode-plane').removeClass("share-plane-show");
    $(this).toggleClass('clickshow-show');
});

function showplane(btn_name, plane_name, e) {
    $('.post-pop-plane').removeClass("post-pop-plane-show");
    $(plane_name).addClass("post-pop-plane-show");
    var btn_left = $(btn_name).position().left;
    var plane_width = $(plane_name).outerWidth();
    var btn_width = $(btn_name).outerWidth();
    var btn_hight = $(btn_name).outerHeight();
    $(plane_name).css('left', btn_left - plane_width / 2 + btn_width / 2 + 'px');
    $(plane_name).css('bottom', btn_hight + 10 + 'px');
    e.stopPropagation();
}

$('.post-qrcode-btn').click((e) => {
    $('#qrcode-plane').addClass("share-plane-show");
    e.stopPropagation();
});
$(document).ready(function () {
    if ($('#qrcode-img').length > 0) {
        new QRCode($('#qrcode-img')[0], window.location.href);
    }
});
$(this).next().animate({height: '100%'}, 500);
$('.zd-plane-title').click(function (e) {
    if (!$(this).hasClass('zd-plane-title-zk')) {
        $(this).addClass('zd-plane-title-zk');
        $(this).next().slideDown();
    } else {
        $(this).removeClass('zd-plane-title-zk')
        $(this).next().slideUp();
    }
})
if ($(".code-bar-btn-copy-fonticon").length > 0) {
    var clipboard = new ClipboardJS('.code-bar-btn-copy-fonticon', {
        text: function (trigger) {
            copynotmsg = 1;
            return $(trigger).parent().prev().text();
        }
    });
    clipboard.on('success', function (e) {
        $(e.trigger).toggleClass('fal fa-clone')
        $(e.trigger).toggleClass('fal fa-check')
        setTimeout(function () {
            $(e.trigger).toggleClass('fal fa-clone')
            $(e.trigger).toggleClass('fal fa-check')
        }, 2000);
    });
    clipboard.on('error', function (e) {
        $(e.trigger).toggleClass('fal fa-clone')
        $(e.trigger).toggleClass('fal times')
        setTimeout(function () {
            $(e.trigger).toggleClass('fal fa-clone')
            $(e.trigger).toggleClass('fal times')
        }, 2000);
    });
}
if ($(".btn-copy-pwd").length > 0) {
    var copy_pwd = new ClipboardJS('.btn-copy-pwd', {
        text: function (trigger) {
            copynotmsg = 1;
            return $(trigger).parent().find('.c-downbtn-pwd-key').text();
        }
    });
    copy_pwd.on('success', function (e) {
        $(e.trigger).toggleClass('fal fa-clone')
        $(e.trigger).toggleClass('fal fa-check')
        setTimeout(function () {
            $(e.trigger).toggleClass('fal fa-clone')
            $(e.trigger).toggleClass('fal fa-check')
        }, 2000);
    });
}
//
// function commentComponent() {
//     var commentContent = $('#jpress-comment-form').find('textarea[name="content"]').val();
//     if (!commentContent || commentContent == ""){
//         alert("评论内容不能为空");
//         return false;
//     }
//
//     $('#jpress-comment-form').ajaxSubmit({
//         type: "post",
//         success: function (data) {
//             if (data.state == "ok") {
//
//                 $('#comment-pid').val("");
//                 $('#comment-captcha').val("");
//                 $('#comment-vcode').click();
//
//                 if (data.html){
//                     if ($(".comment-page > div:first-child").length > 0){
//                         $(".comment-page > div:first-child").before(data.html);
//                     }else {
//                         $(".comment-page").html(data.html);
//                     }
//                     $('.comment-textarea textarea').val('');
//                 }else {
//                     alert('评论内容发布成功');
//                     location.reload();
//                 }
//             }
//             //评论失败
//             else {
//                 alert('评论失败：' + data.message);
//
//                 //用户未登录
//                 if (data.errorCode == 9 && data.gotoUrl) {
//                     location.href = data.gotoUrl;
//                 }
//                 //验证码错误
//                 else if (data.errorCode == 2){
//                     $('#comment-vcode').click();
//                     $('#comment-captcha').val("");
//                     $('#comment-captcha').focus();
//                 }
//                 //其他
//                 else {
//                     $('#comment-vcode').click();
//                     $('#comment-captcha').val("");
//                     $('.comment-textarea textarea').val('');
//                     $('.comment-textarea textarea').focus();
//                 }
//             }
//         },
//         error: function () {
//             alert("网络错误，请稍后重试");
//         }
//     });
//     return false;
// }
