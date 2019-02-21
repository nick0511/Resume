function send(){
    //文本框数组
    var text = ["want","name","age","nalive","nation","date","money","phone","email","wechat","addtress","school","introduce","sexperience","dexperience"]
    
    //选择框数组
    var select=["healthselect","majorselect","doselect","changeselect","talkselect","studyselect","schemeselect"]
    
    var a = new Array
    //文本框循环
    for(i=0;i<text.length;i++)
        {
            var c=text[i];
            a[i]=document.getElementById(c).value;
        }
    
    var b = new Array
    //选择框循环
    for(i=0;i<select.length;i++)
        {
            var d=select[i];
            var e = document.getElementById(d);
            var Index = e.selectedIndex;
            b[i] = e.options[Index].value;
        }

    //单选框
    var s = document.getElementsByName("sex");
    for(i=0; i<s.length; i++)
        {
            if(s[i].checked==true)
                var p = s[i].value;
        }
    
    alert("求职意向: "+a[0]+"  姓名: "+a[1]+"  年龄: "+a[2]+"  籍贯: "+a[3]+"  民族: "+a[4]+"  出生日期: "+a[5]+"  期望薪资: "+a[6]+"   健康状况: "+b[0]+"  性别: "+p+"  电话: "+a[7]+"  邮件: "+a[8]+"  微信: "+a[9]+"  地址: "+a[10]+"  学校: "+a[11]+"  专业能力: "+b[1]+"  执行能力: "+b[2]+"    应变能力: "+b[3]+"  交际能力: "+b[4]+"  学习能力: "+b[5]+"  策划能力: "+b[6]+"  自我介绍: "+a[12]+"  校园经历: "+a[13]+"  项目经历: "+a[14]);
}