# css3动画
标签： css3
------
## 1.什么是CSS3动画？
CSS3动画相关的几个重要属性：transition（过渡），transform（变换），animation（动画）。

## 2.transition简介
transition有以下属性
> transition-property :* //指定过渡的性质，比如transition-property:backgrond 就是指backgound参与这个过渡
transition-duration:* //指定这个过渡的持续时间
transition-delay:* //延迟过渡时间
transition-timing-function:*//指定过渡类型，有ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier

## 3.transform简介
transform等同于photoshop中自由变换。属性：拉伸，压缩，旋转，偏移。

## 4.animation简介
animation有以下八个属性：
>animation-name     //动画名字
animation-duration      //动画时长
animation-delay         //动画延迟
animation-iteration-count   
animation-direction
animation-play-state
animation-fill-mode
animation-timing-function   //动画速度

1）animation-timing-function是控制时间的属性，在取值中除了常用到的**三次贝塞尔曲线**以外，还**steps()** 函数
注意：timing-function作用于每两个关键帧之间，而不是整个动画

**steps()介绍：**
steps()是一个timing function，允许我们将动画或者过渡分割成段，而不是从一种状态持续到另一种状态的过渡。这个函数有两个参数——第一个参数是一个正值，指定我们希望动画分割的段数。
> Steps(<number_of_steps>，<direction>)
第一个参数指定了时间函数中的间隔数量（必须是正整数）
第二个参数可选，接受 start 和 end 两个值，指定在每个间隔的起点或是终点发生阶跃变化，默认为 end

## 5.@keyframes简介
@keyframes创建动画的关键帧。需要将@keyframes绑定到选择器中，其中必须定义**动画名称**和**动画时长**。

## 6.transition和animation区别
1）Transition强调过渡，适用于简单效果，只包括了初始属性和最终属性。
transition需要触发一个事件(hover事件或click事件等)才会随时间改变其css属性；

2）Animation强调帧操作。适用于复杂的动画能够进行每一帧的操作，比如说我要第一个时间段执行什么动作，第二个时间段执行什么动作。
animation在不需要触发任何事件的情况下也可以显式的随着时间变化来改变元素css的属性值，从而达到一种动画的效果。

## 出坑宝典
1.在写淡入淡出的时候用display：none无效该如何解决？
用visibility：hidden和opacity：0来替代

2.CSS3动效在手机端（安卓）卡顿怎么办？
步骤一：判断是否使用了高消耗属性，如：
>shadow、background-attachment:fixed等

步骤二：判断是否动画导致了回流
>**解决方法：**
1）使用transform，避免使用height,width,margin,padding等避免影响文档树；
用scale来替代width，height来改变元素大小；
用translate来替代top，left来改变元素的位置；

步骤三：开启硬件加速
>解决方法：
1）backface-visibility：hidden
2）translate3d或translateZ
**translate3d:**
webkit-transform: translate3d(0,0,0); 
-moz-transform: translate3d(0,0,0); 
-ms-transform: translate3d(0,0,0); 
-o-transform: translate3d(0,0,0); 
transform: translate3d(0,0,0);

>**translateZ:**
webkit-transform: translateZ(0); 
-moz-transform: translateZ(0); 
-ms-transform: translateZ(0); 
-o-transform: translateZ(0); 
transform: translateZ(0);



