function checkScore(){
let score1 = score.value;

    if (score1 > 0 && score1 < 40) {
        document.getElementById("result").innerHTML = "fail";
        
    } else if (score1 >= 39 && score1 < 45) {
    document.getElementById("result").innerHTML = "pass";
    
    }
    else if (score1 >= 45 && score1 < 50) {
        document.getElementById("result").innerHTML = "credit";
        var songFailure = new Audio('audio/BTS-Life-Goes-On-(TrendyBeatz.com).mp3')
        songFailure.play()

        }
        else if (score1 >= 50 && score1 < 60) {
            document.getElementById("result").innerHTML = "good";
                
            }
            else if (score1 >= 60 && score1 < 70) {
                document.getElementById("result").innerHTML = "wonderful";
                    
                }
                else if (score1 >= 70 && score1 <= 100) {
                    document.getElementById("result").innerHTML = "Excellent";
                        
                    }
                    else if (score1 < 0) {
                        document.getElementById("result").innerHTML = "invalid score";
                        
                        }
                        else if (score1 >= 100) {
                            document.getElementById("result").innerHTML = "Too much";
                                
                            }
                            else if (score1 === '') {
                                document.getElementById("result").innerHTML = "PLEASE INPUT YOUR SCORE";
                            
                                }ghghhg
 }