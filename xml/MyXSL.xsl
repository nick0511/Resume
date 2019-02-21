<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
		<xsl:template match="/">

<html>
<head>
	<title>简历</title>
	<link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
<body>

	
<div id="large">
	<div id="main">
		
		<table  width="800" align="center">
			<tr>
				
				<td align="center"><p><xsl:text>求职简历</xsl:text><br/><font id='H1'><xsl:text>Personal Resume</xsl:text></font></p>
				</td>

				<td >
					
					</td>
			</tr>
			
 
		</table>
		
		
		<table  align="center" width="800" >
		
			
			<hr class="line" ></hr>
			
			<tr>
				<td><xsl:text>姓名:</xsl:text><xsl:value-of select="//姓名"/></td>
				<td width="100" height="30"></td>
				
				<td><xsl:text>性别:</xsl:text><xsl:value-of select="//性别"/></td>
				<td width="100" height="30"></td>
				<td><xsl:text>民族:</xsl:text><xsl:value-of select="//民族"/></td>
				<td width="100" height="30"></td>
			</tr>
			<tr>
				<td><xsl:text>出生年月：</xsl:text><xsl:value-of select="//出生年月"/></td>
				<td width="100" height="30"></td>
				
				<td colspan="2"><xsl:text>联系电话：</xsl:text><xsl:value-of select="//联系电话"/></td>
				<td><xsl:text>工作经验:</xsl:text><xsl:value-of select="//工作经验"/>
				</td>
				
				<td width="50" height="30"></td>
			</tr>
			<tr>
				<td ><xsl:text>学历：</xsl:text><xsl:value-of select="//学历"/>				
				</td>
				<td width="50" height="30"></td>
				<td colspan="2"><xsl:text>专业：</xsl:text><xsl:value-of select="//专业"/></td>
				
				<td><xsl:text>毕业学校：</xsl:text><xsl:value-of select="//毕业学校"/></td>
				<td width="100" height="30"></td>
			
			</tr>
			
			
			<tr>
				<td><xsl:text>住址：</xsl:text><xsl:value-of select="//住址"/></td>
				<td height="30"></td>	
			</tr>
			
			
			<tr>
				<td><xsl:text>电子邮箱：</xsl:text><xsl:value-of select="//电子邮箱"/></td>
				<td height="30"></td>
			</tr>
			
			
			<tr>
				<td><xsl:text>求职意向：</xsl:text><xsl:value-of select="//求职意向"/></td>
				<td height="30"></td>
			</tr>
	   
	   </table>
		
		
		<hr class="line"></hr>
	    
		
		<table align="center" width="800">

				
			
			<tr>
				
				<td><xsl:text>目标职位</xsl:text>
                <xsl:value-of select="//目标职位"/>
                </td>
				<td height="30"></td>

			</tr>
	

			<tr>
				<td><xsl:text>目标行业：</xsl:text>
				<xsl:value-of select="//目标行业"/>

				</td>

				<td height="30"></td>
			</tr>

			<tr>
				<td><xsl:text>期望薪资：</xsl:text>
					<xsl:value-of select="//期望薪资"/>
				</td>

				<td height="30"></td>
			</tr>

			<tr>

				<td><xsl:text>期望地区：</xsl:text>
					<xsl:value-of select="//期望地区"/>
				</td>
				
				<td height="30"></td>
			</tr>
			
			<tr>
				<td><xsl:text>爱好特长：</xsl:text>
                <xsl:value-of select="//爱好特长"/>
				</td>
			
				<td height="30"></td>
		
			</tr>
		
		</table>
		
		
		<hr class="line"></hr>
		
	
			<table align="center" width="800">
				<tr>
						<td><xsl:text>自我评价：</xsl:text></td>
                        <td>
                        <br/>
						<xsl:value-of select="//自我评价"/>
                        </td>
						
                        <td height="30"></td>
				</tr>
			</table>
			
			
			<table align="center" width="800">
			
			</table>
			</div>
		</div>
	
</body>
</html>

    </xsl:template>
    
</xsl:stylesheet>