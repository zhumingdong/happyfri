<!--
 * @Author: your name
 * @Date: 2020-06-15 17:36:27
 * @LastEditTime: 2020-06-16 16:37:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \happyfri\app\src\views\Home.vue
--> 
<template>
  <div class="home_container">
    <section>
      <header class="top_tips">
        <span class="num_tip">题目{{itemNum}}</span>
      </header>
      <div>
        <div class="item_back item_container_style">
          <div class="item_list_container">
            <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
            <ul>
              <li
                class="item_list"
                v-for="(item, index) in itemDetail[itemNum-1].topic_answer"
                :key="index"
                @click="choose(item.topic_answer_id)"
              >
                <span
                  class="option_style"
                  :class="{'has_choosed':chooseId==item.topic_answer_id}"
                >{{hehe(index)}}</span>
                <span class="option_detail">{{item.answer_name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <span class="next_item button_style" v-if="itemNum < itemDetail.length" @click="nextItem"></span>
        <span class="submit_item button_style" v-else @click="submitAnswer"></span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      // answerId: [], //submitAnswer存储
      itemNum: "1",
      chooseId: "" //选中submitAnswer存储id
    };
  },
  computed: {
    ...mapState(["itemDetail"])
  },
  mounted() {},
  methods: {
    ...mapActions(["AddAnswerId"]),
    hehe(index) {
      console.log(index);
      switch (index) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
      }
    },
    nextItem() {
      if (this.chooseId != "") {
        this.itemNum++;
        this.AddAnswerId(this.chooseId);

        // this.answerId.push(this.chooseId);
        this.chooseId = "";
        // console.log(this.answerId);
      } else {
        alert("请选择你的选项");
      }
    },
    choose(id) {
      this.chooseId = id;
    },
    submitAnswer() {
      // this.answerId.push(this.chooseId);

      this.AddAnswerId(this.chooseId);

      // console.log(this.answerId);

      this.$router.push("/score");
    }
  }
};
</script>

<style lang="less" scoped>
.top_tips {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../assets/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;
  .num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: "黑体";
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}
.item_container_style {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}
.home_logo {
  background-image: url(../assets/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}
.item_back {
  background-image: url(../assets/2-1.png);
  background-size: 100% 100%;
}
.button_style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}
.start {
  background-image: url(../assets/1-4.png);
}
.next_item {
  background-image: url(../assets/2-2.png);
}
.submit_item {
  background-image: url(../assets/3-1.png);
}
.item_list_container {
  position: absolute;
  height: 7rem;
  width: 8rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}
.item_title {
  font-size: 0.65rem;
  color: #00e;
  line-height: 0.7rem;
}
.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #00e;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
