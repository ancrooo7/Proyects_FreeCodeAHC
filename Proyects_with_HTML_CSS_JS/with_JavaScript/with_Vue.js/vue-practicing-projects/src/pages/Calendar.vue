<template>
    <div id="div-main">
        <h1>Calendar</h1>
        <section class="month-and-year">
            <span id="month">{{ currentMonthName }}</span>
            <span id="year">{{ currentYear }}</span>
        </section>
        <section class="section-days">
            <p v-for="day in days" :key="day">{{ day }}</p>
        </section>
        <section class="section-days">
            <p 
                v-for="num in startDay()"
                :key="num"
            ></p>
            <p 
                v-for="numDays in dayInMonth(currentYear, currentMonth)" 
                :key="numDays"
                :class="currentDateClass(numDays)"
            >
                {{ numDays }}
            </p>
        </section>
        <section class="section-days month-and-year">
            <button @click="prev">Prev</button>
            <button @click="next">Next</button>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            days: ["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat"],
            currentDay: new Date().getUTCDay(),
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
        };
    },
    methods: {
        dayInMonth(){
            return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        next() {
            if (this.currentMonth === 11) {
                this.currentMonth = 1;
                this.currentYear++;
            } else {
                this.currentMonth++;
            }
        },
        prev() {
            if (this.currentMonth === 0) {
                this.currentMonth = 11;
                this.currentYear--;
            } else {
                this.currentMonth--;
            }
        },
        currentDateClass(num) {
            const calendarFullDate = new Date(
                this.currentYear,
                this.currentMonth,
                num
            ).toDateString();
            const currentFullDate = new Date().toDateString();
            return calendarFullDate === currentFullDate ? "text-red" : "";
        }
    },
    computed: {
        currentMonthName() {
            return new Date(
                this.currentYear,
                this.currentMonth
            ).toLocaleDateString("default", {month: "long"});
        }
    }
}
</script>

<style>
    html {
        font-size: 16px;
    }
    #div-main {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .month-and-year {
        display: flex;
        justify-content: space-around;
    }
    .month-and-year span{
        font-size: 1.5em;
        font-weight: 700;
    }
    .section-days {
        display: flex;
        flex-wrap: wrap;
    }
    #button-prev-next {
        align-content: space-between;
    }
    .section-days p {
        width: 14.28%;
    }
    .text-red {
        background-color: red;
        border: 1px solid;
    }
</style>