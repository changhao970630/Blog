<template>
    <div style="padding-bottom: 3rem">
        <el-card v-for="(item,index) in data" :key="index" style="padding: 10px 0px" shadow="hover">
            <div id="title">
                <h4  @click="toDetails(item)">{{item.title}}</h4>
            </div>
            <div id="user">
                <i class="el-icon-s-check"></i>
                <span>{{item.essay_user.nickname}}</span>
            </div>
            <div id="des">
               <p>{{item.remark}}</p>
            </div>
            <div id="more">
                <div id="tag">
                    <el-tag effect="dark" :type="Math.random()*10>5?'primary':'danger'" size="mini">{{item.essay_type.typeName}}</el-tag>
                </div>
               <h5 @click="toDetails(item)">ReadMore</h5>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "contentCard",
        props:{
            data:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data() {
            return {
               mock_data: [
                    {
                        id:1,
                        title:"1废掉一个人最快的方法，就是让他闲着",
                        user:"Jenny乔",
                        des:"有人说，想要看一个人是否优秀，那就看他闲下来做什么。这世上有人忙里偷闲，利用坐车和排队的间隙，读书，思考，写作，也有人终日无所事事，虚度光阴。闲，并不是一个人的福气。相反，废掉一个人最快的方式就是让他闲下来。正如罗曼·罗兰所说：“生活中最沉重的负担不是工作，而是无聊。"
                    },
                    {
                        id:1,
                        title:"Hooray",
                        user:"Mederlin",
                        des:" It's snowing! It's time to make a snowman.James runs out. He makes a big pile of snow. He puts a big snowball on top. He adds a scarf and a hat. He adds an orange for the nose. He adds coal for the eyes and buttons.In the evening, James opens the door. What does he see? The snowman is moving! James invites him in. The snowman has never been inside a house. He says hello to the cat. He plays with paper towels.A moment later, the snowman takes James's hand and goes out.They go up, up, up into the air! They are flying! What a wonderful night!The next morning, James jumps out of bed. He runs to the door.He wants to thank the snowman. But he's gone."
                    },
                    {
                        id:1,
                        title:"我们的青春进行时，奋斗的青春",
                        user:"文学",
                        des:"爱我中华江山如画，我们是勤劳智慧的人民，我们是勤劳工作的老百姓;\n" +
                            "\n" +
                            "有国才有家，所以勤劳朴实的老百姓工作在祖国的大江南北，幸福都是奋斗出来的……\n" +
                            "\n" +
                            "向勤劳智慧的人民致敬!\n" +
                            "\n" +
                            "向谦和奉公为民服务的工作人员致敬，您们工作辛苦了!\n" +
                            "\n" +
                            "感恩福泽华夏，千言万语汇成一句话：锦绣中华奋进中国梦……\n" +
                            "\n" +
                            "感恩美好时代的真善美，翱翔时代的青春梦，祝福祖国繁荣昌盛锦绣中华……\n" +
                            "\n" +
                            "盛世欢歌春风美……"
                    },
                    {
                        id:1,
                        title:"废掉一个人最快的方法，就是让他闲着",
                        user:"Jenny乔",
                        des:"有人说，想要看一个人是否优秀，那就看他闲下来做什么。这世上有人忙里偷闲，利用坐车和排队的间隙，读书，思考，写作，也有人终日无所事事，虚度光阴。闲，并不是一个人的福气。相反，废掉一个人最快的方式就是让他闲下来。正如罗曼·罗兰所说：“生活中最沉重的负担不是工作，而是无聊。"
                    },
                    {
                        id:1,
                        title:"Hooray",
                        user:"Mederlin",
                        des:" It's snowing! It's time to make a snowman.James runs out. He makes a big pile of snow. He puts a big snowball on top. He adds a scarf and a hat. He adds an orange for the nose. He adds coal for the eyes and buttons.In the evening, James opens the door. What does he see? The snowman is moving! James invites him in. The snowman has never been inside a house. He says hello to the cat. He plays with paper towels.A moment later, the snowman takes James's hand and goes out.They go up, up, up into the air! They are flying! What a wonderful night!The next morning, James jumps out of bed. He runs to the door.He wants to thank the snowman. But he's gone."
                    },
                    {
                        id:1,
                        title:"我们的青春进行时，奋斗的青春",
                        user:"文学",
                        des:"爱我中华江山如画，我们是勤劳智慧的人民，我们是勤劳工作的老百姓;\n" +
                            "\n" +
                            "有国才有家，所以勤劳朴实的老百姓工作在祖国的大江南北，幸福都是奋斗出来的……\n" +
                            "\n" +
                            "向勤劳智慧的人民致敬!\n" +
                            "\n" +
                            "向谦和奉公为民服务的工作人员致敬，您们工作辛苦了!\n" +
                            "\n" +
                            "感恩福泽华夏，千言万语汇成一句话：锦绣中华奋进中国梦……\n" +
                            "\n" +
                            "感恩美好时代的真善美，翱翔时代的青春梦，祝福祖国繁荣昌盛锦绣中华……\n" +
                            "\n" +
                            "盛世欢歌春风美……"
                    },
                    {
                        id:1,
                        title:"废掉一个人最快的方法，就是让他闲着",
                        user:"Jenny乔",
                        des:"有人说，想要看一个人是否优秀，那就看他闲下来做什么。这世上有人忙里偷闲，利用坐车和排队的间隙，读书，思考，写作，也有人终日无所事事，虚度光阴。闲，并不是一个人的福气。相反，废掉一个人最快的方式就是让他闲下来。正如罗曼·罗兰所说：“生活中最沉重的负担不是工作，而是无聊。"
                    },
                    {
                        id:1,
                        title:"Hooray",
                        user:"Mederlin",
                        des:" It's snowing! It's time to make a snowman.James runs out. He makes a big pile of snow. He puts a big snowball on top. He adds a scarf and a hat. He adds an orange for the nose. He adds coal for the eyes and buttons.In the evening, James opens the door. What does he see? The snowman is moving! James invites him in. The snowman has never been inside a house. He says hello to the cat. He plays with paper towels.A moment later, the snowman takes James's hand and goes out.They go up, up, up into the air! They are flying! What a wonderful night!The next morning, James jumps out of bed. He runs to the door.He wants to thank the snowman. But he's gone."
                    },
                    {
                        id:1,
                        title:"我们的青春进行时，奋斗的青春",
                        user:"文学1",
                        des:"爱我中华江山如画，我们是勤劳智慧的人民，我们是勤劳工作的老百姓;\n" +
                            "\n" +
                            "有国才有家，所以勤劳朴实的老百姓工作在祖国的大江南北，幸福都是奋斗出来的……\n" +
                            "\n" +
                            "向勤劳智慧的人民致敬!\n" +
                            "\n" +
                            "向谦和奉公为民服务的工作人员致敬，您们工作辛苦了!\n" +
                            "\n" +
                            "感恩福泽华夏，千言万语汇成一句话：锦绣中华奋进中国梦……\n" +
                            "\n" +
                            "感恩美好时代的真善美，翱翔时代的青春梦，祝福祖国繁荣昌盛锦绣中华……\n" +
                            "\n" +
                            "盛世欢歌春风美……"
                    },
                ]
            }
        },
        methods: {
            toDetails(item) {
                this.$router.push({name:"details",params:{id:item.id}})
            }
        },

    }
</script>

<style lang="less" scoped>
    #title{ //标题
        h4{
            display: inline-block;
            cursor: pointer;
        }
        h4:hover{
            color: #ffa422;
            text-decoration: underline;
        }
    }
    #user{
        color: deeppink;
        margin: 10px 0px;
    }
    #des{//简介
        p {
            font-size: .8rem;
            max-height: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    #more{
        margin: 10px;
        h5{
            background-color: #d1de69;
            display: inline-block;
            padding: .33rem;
            border-radius: 8%;
            cursor: pointer;
            transition: .3s;
            float: right;

        }
        #tag{
            float: left;
        }
        h5:hover{
            background-color: cadetblue;
            color: white;
        }
    }
</style>
