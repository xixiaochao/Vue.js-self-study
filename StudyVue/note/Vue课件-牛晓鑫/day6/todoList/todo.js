/**
 * Created by Administrator on 2018/9/5.
 */
let vm=new Vue({
    el:"#app",
    data:{
        todos:[
            {isSelected:false,title:'睡觉'},
            {isSelected:false,title:'吃饭'}
        ],
        title:"",
        hash:"",
        cur:""
    },
    created(){
        this.hash="#all";
        window.addEventListener("hashchange",()=>{
            this.hash=window.location.hash;
        });
    },
    methods:{
        add(){
            this.todos.push({
                isSelected:false,
                title:this.title
            });
            this.title="";
        },
        remove(val){
            this.cur=val;
        },
        cancal(){
            this.cur="";
        }
    },
    computed:{
        filterTodo(){
            if(this.hash==="#all"|| this.hash==="")return this.todos;
            if(this.hash==="#finish")return this.todos.filter(item=>item.isSelected);
            if(this.hash==="#unfinish")return this.todos.filter(item=>!item.isSelected);
        },
        count(){
            return this.todos.filter(item=>!item.isSelected).length;
        }
    }
});