
function print() {
    var xinmin=document.form1.name1.value;                              //姓名
    var xinbie=document.form1.name2.value;                              //性别
    var csny=document.form1.name3.value;                                //出生年月
    var yx=document.form1.name4.value;                                  //邮箱
    var mz=document.form1.name5.value;                                  //民族
    var zzmm=document.form1.name6.value;                                //政治面貌
    var bydx=document.form1.name7.value;                                //毕业院校
    var xl=document.form1.name8.value;                                  //学历
    var zz=document.form1.name9.value;                                  //住址
    var dh=document.form1.name10.value;                                  //电话
    var jybj=document.getElementById("name11").value;                     //教育背景
    var xnsj=document.getElementById("name12").value;                     //校内实践
    var jnzs=document.getElementById("name13").value;                     //技能证书
    var zwpj=document.getElementById("name14").value;                     //自我评价

    alert("您的简历信息\n"+"你输入的姓名："+xinmin+"\n性别："+xinbie+"\n出生年月："
        +csny+"\n您的邮箱："+yx+"\n您的名族："+mz+"\n您的政治面貌："+zzmm+"\n毕业院校"
        +bydx+"\n您的学历："+xl+"\n您的住址："+zz+"\n你的电话"+dh+"\n教育背景："+jybj+"\n校内实践："
        +xnsj+"\n技能证书："+jnzs+"\n自我评价："+zwpj);
    var jianli=window.open();
    jianli.document.writeln("<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <title>生成简历样式</title>\n" +
        "\n" +
        "</head>\n" +
        "<body bgcolor=\"#5f9ea0\">\n" +
        "<p align=\"center\">个人求职简历</p>\n" +
        "    <table border=\"1\" cellspacing=\"0\" width=\"60%\"align=\"center\" bgcolor=\"#d3d3d3\">\n" +
        "        <tr>\n" +
        "            <td colspan=\"5\" align=\"left\" height=30>※基本信息</td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td width=125 height=30 align=\"center\">姓名</td>\n" +
        "            <td width=200 height=30>"+xinmin+"</td>\n" +
        "            <td width=125 height=30 align=\"center\">出生年月</td>\n" +
        "            <td width=200 height=30>"+csny+"</td>\n" +
        "            <td rowspan=\"4\"></td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td height=30 align=\"center\">民族</td>\n" +
        "            <td height=30>"+mz+"</td>\n" +
        "            <td height=30 align=\"center\">政治面貌</td>\n" +
        "            <td height=30>"+zzmm+"</td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td height=30 align=\"center\">电话</td>\n" +
        "            <td height=30>"+dh+"</td>\n" +
        "            <td height=30 align=\"center\">毕业院校</td>\n" +
        "            <td height=30>"+bydx+"</td>\n" +
        "        </tr>\n" +
        "        <tr>\n" +
        "            <td height=30 align=\"center\">邮箱</td>\n" +
        "            <td height=30>"+yx+"</td>\n" +
        "            <td height=30 align=\"center\">学历</td>\n" +
        "            <td height=30>"+xl+"</td>\n" +
        "        </tr>\n" +
        "        <tr><td height=30 align=\"center\">性别<td>"+xinbie+"</td> <td height=30 align=\"center\">住址<td colspan=\"2\">"+zz+"</td></td>\n" +
        "        </tr>\n" +
        "        <tr><td colspan=\"5\" height=30>※教育背景</td> </tr>\n" +
        "        <tr><td colspan=\"5\" height=\"80\">"+jybj+"</td></tr>\n" +
        "        <tr><td colspan=\"5\" height=30>※校内实践</td> </tr>\n" +
        "        <tr><td colspan=\"5\" height=\"80\">"+xnsj+"</td> </tr>\n" +
        "        <tr><td colspan=\"5\" height=30>※技能证书</td> </tr>\n" +
        "        <tr><td colspan=\"5\" height=\"80\">"+jnzs+"</td> </tr>\n" +
        "        <tr><td colspan=\"5\" height=30>※自我评价</td> </tr>\n" +
        "        <tr><td colspan=\"5\" height=\"80\">"+zwpj+"</td> </tr>\n" +
        "    </table>\n" +
        "</body>\n" +
        "</html>");
    window.open(jianli);

}
