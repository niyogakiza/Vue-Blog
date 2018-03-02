Vue.component('reading-comp',{
    template:'#reading-temp',
    props:['title','author','date','category','theme_color'],
    data:function(){
        return{}
    },
    methods:{}
});
var vm = new Vue({
    el:'#app',
    data:{
        show:true,
        limit:100,
        title:'Learn Vue ',
        article:'Lorem ipsum dolor sit amet consectetur adipiscing elit porta, ac odio leo diam sem risus bibendum lacinia aptent, arcu a porttitor parturient platea sodales velit. Commodo netus cras curabitur sem auctor porta, lobortis mus fusce quis faucibus fringilla magna, arcu praesent duis vehicula interdum. Maecenas sociosqu nam luctus aptent enim auctor ligula mollis iaculis habitasse, quisque parturient purus elementum dis pellentesque massa volutpat feugiat erat, class facilisis et justo dictumst aliquet vulputate hendrerit integer.\n' +
        '\n' +
        'At ultricies purus nisi rutrum cras aenean justo placerat pellentesque magna interdum praesent, proin fames imperdiet ante scelerisque neque nulla pulvinar vel curae egestas. Dapibus euismod neque sed penatibus vestibulum nisi, phasellus proin nam ante ridiculus a egestas, aptent facilisis pulvinar duis libero. Vivamus taciti tempus dignissim scelerisque accumsan mattis quam non etiam litora fames, nisi interdum nulla lacinia tellus lectus cum luctus magnis semper sem ullamcorper, urna fusce pretium ornare iaculis aptent vestibulum magna habitant neque.',
        author:'Aimable',
        date:'2018', // This is a temporary initial value...
        category:'Tech',
        category_list:['Web','Tech','News','Science','Sports'],
        category_theme_color:{
            Web:'Crimson',
            Tech:'Teal',
            News:'Green',
            Science:'Violet',
            Sports:'Orange'
        }
        // we will deal with theme color later...
    },
    computed:{
        remain:function(){
            return this.limit - this.title.length
        }
    },
    methods:{
        save:function(){
            var date = new Date();
            var year = String(date.getFullYear());
            var year_two_digit = "'"+year.substr(2,2);// '17

            var month = date.getMonth()+1;
            switch(month){
                case 1:
                    var month_str = 'Jan';
                    break;
                case 2:
                    var month_str = 'Feb';
                    break;
                case 3:
                    var month_str = 'Mar';
                    break;
                case 4:
                    var month_str = 'Apr';
                    break;
                case 5:
                    var month_str = 'May';
                    break;
                case 6:
                    var month_str = 'Jun';
                    break;
                case 7:
                    var month_str = 'Jul';
                    break;
                case 8:
                    var month_str = 'Aug';
                    break;
                case 9:
                    var month_str = 'Sep';
                    break;
                case 10:
                    var month_str = 'Oct';
                    break;
                case 11:
                    var month_str = 'Nov';
                    break;
                case 12:
                    var month_str = 'Dec';
                    break;
            }
            var day = date.getDate();
            if(day<=9){
                day = '0'+day
            }
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            var mdy = month_str+' '+day+' '+year_two_digit;
            var hms = hour+':'+min+':'+sec;
            var ymdhms = mdy+' '+hms;
            this.date = ymdhms;
            this.show = !this.show // restore the switch here
        },
        check:function(){
            if(this.remain<0){
                this.title = this.title.substr(0,this.limit)
            }
        }
    }
});
















/*
* year: date.getFullYear()
* month: date.getMonth()
* day: date.getDate()
* hour: date.getHours()
* min: date.getMinutes()
* sec: date.getSeconds()
* */
// StackOverFlow date format.
// function ymdhms(){
//     var date = new Date();
//     var year = String(date.getFullYear());
//     var year_two_digit = "'"+ year.substr(2,2);// 17
//
//     var month = date.getMonth()+1;
//     switch (month){
//         case 1:
//             var month_str = 'Jan';
//             break;
//         case 2:
//             var month_str = 'Feb';
//             break;
//         case 3:
//             var month_str = 'Mar';
//             break;
//         case 4:
//             var month_str = 'Apr';
//             break;
//         case 5:
//             var month_str = 'May';
//             break;
//         case 6:
//             var month_str = 'Jun';
//             break;
//         case 7:
//             var month_str = 'Jul';
//             break;
//         case 8:
//             var month_str = 'Aug';
//             break;
//         case 9:
//             var month_str = 'Sep';
//             break;
//         case 10:
//             var month_str = 'Oct';
//             break;
//         case 11:
//             var month_str = 'Nov';
//             break;
//         case 12:
//             var month_str = 'Dec';
//             break;
//     }
// // Day 09
//     var day = date.getDate();
//     if(day <= 9){
//         day = '0' + day
//     }
//
// //time
//     var hour = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
// //var time = hour + ':' + min + ':' + sec;
//
//     var mdy = month_str +''+ day +''+ year_two_digit;
//     var hms = hour + ':' + min + ':' + sec;
//     var ymdhms = mdy+' '+hms ;
//     return ymdhms;
// }
// ymdhms();
// alert(ymdhms());
