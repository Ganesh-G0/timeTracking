getData("weekly");

$(".btn").click((e) => {
  let input = e.target.id;
  $("#daily").removeClass("active");
  $("#weekly").removeClass("active");
  $("#monthly").removeClass("active");
  if (input == "daily") { 
    $("#daily").addClass("active"); 
    getData("daily");
    $(".timeline").text("day");
  }
  else if (input == "weekly") { 
    $("#weekly").addClass("active"); 
    getData("weekly");
    $(".timeline").text("week");
  }
  else if (input == "monthly") { 
    $("#monthly").addClass("active"); 
    getData("monthly");    
    $(".timeline").text("month");
  }
});

async function getData(str) {
  try {
    const response = await axios.get("./data.json");
    
    // console.log(response.data[0].timeframes.daily);

    if (str === "daily") { getDaily(); }
    else if (str === "weekly") { getWeekly(); }
    else if (str === "monthly") { getMonthly(); }
    function getDaily() {
      $(".workCurrent").text(response.data[0].timeframes.daily.current);
      $(".workPrevious").text(response.data[0].timeframes.daily.previous);
      $(".playCurrent").text(response.data[1].timeframes.daily.current);
      $(".playPrevious").text(response.data[1].timeframes.daily.previous);
      $(".studyCurrent").text(response.data[2].timeframes.daily.current);
      $(".studyPrevious").text(response.data[2].timeframes.daily.previous);
      $(".exerciseCurrent").text(response.data[3].timeframes.daily.current);
      $(".exercisePrevious").text(response.data[3].timeframes.daily.previous);
      $(".socialCurrent").text(response.data[4].timeframes.daily.current);
      $(".socialPrevious").text(response.data[4].timeframes.daily.previous);
      $(".selfCareCurrent").text(response.data[5].timeframes.daily.current);
      $(".selfCarePrevious").text(response.data[5].timeframes.daily.previous);
    }
    function getWeekly() {
      $(".workCurrent").text(response.data[0].timeframes.weekly.current);
      $(".workPrevious").text(response.data[0].timeframes.weekly.previous);
      $(".playCurrent").text(response.data[1].timeframes.weekly.current);
      $(".playPrevious").text(response.data[1].timeframes.weekly.previous);
      $(".studyCurrent").text(response.data[2].timeframes.weekly.current);
      $(".studyPrevious").text(response.data[2].timeframes.weekly.previous);
      $(".exerciseCurrent").text(response.data[3].timeframes.weekly.current);
      $(".exercisePrevious").text(response.data[3].timeframes.weekly.previous);
      $(".socialCurrent").text(response.data[4].timeframes.weekly.current);
      $(".socialPrevious").text(response.data[4].timeframes.weekly.previous);
      $(".selfCareCurrent").text(response.data[5].timeframes.weekly.current);
      $(".selfCarePrevious").text(response.data[5].timeframes.weekly.previous);
    }
    function getMonthly() {
      $(".workCurrent").text(response.data[0].timeframes.monthly.current);
      $(".workPrevious").text(response.data[0].timeframes.monthly.previous);
      $(".playCurrent").text(response.data[1].timeframes.monthly.current);
      $(".playPrevious").text(response.data[1].timeframes.monthly.previous);
      $(".studyCurrent").text(response.data[2].timeframes.monthly.current);
      $(".studyPrevious").text(response.data[2].timeframes.monthly.previous);
      $(".exerciseCurrent").text(response.data[3].timeframes.monthly.current);
      $(".exercisePrevious").text(response.data[3].timeframes.monthly.previous);
      $(".socialCurrent").text(response.data[4].timeframes.monthly.current);
      $(".socialPrevious").text(response.data[4].timeframes.monthly.previous);
      $(".selfCareCurrent").text(response.data[5].timeframes.monthly.current);
      $(".selfCarePrevious").text(response.data[5].timeframes.monthly.previous);
    }
  } catch (error) {
    console.error(error);
  }
};  