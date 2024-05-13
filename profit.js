const testcases = [
  { time: 7, earning: 3000 },
  { time: 8, earning: 4500 },
  { time: 13, earning: 16500 }
];


const CreationTime=[5,4,10]
const earnings=[1500,1000,3000]

function Solverfunction(inputfromuser){
    let result = []
    const givendataforBusiness = [{name:'T', earning:1500, giventime:5}, {name:'P', earning:1000, giventime:4}, {name:'C', earning:3000, giventime:10}]
    for(let i = 0; i<givendataforBusiness.length; i++){
        let bussiness = givendataforBusiness[i]
        if(inputfromuser.time < bussiness.giventime){
            continue
        }else{
            let totalTimeforCompletebusiness = 0;
            let Totalbusiness = parseInt(inputfromuser.time / bussiness.giventime)
            let totaldvelopmentTimetaken  = 0;
            for(let i = 1; i<= Totalbusiness; i++){
                let bussinessRunningTime = (inputfromuser.time - totaldvelopmentTimetaken ) - bussiness.giventime
                totalTimeforCompletebusiness += bussinessRunningTime
                totaldvelopmentTimetaken += bussiness.giventime
            }
            let totalEarningFromBussiness = totalTimeforCompletebusiness * bussiness.earning
            if(totalEarningFromBussiness == inputfromuser.earning){
                let solution = {'T':0, 'P':0, 'C':0}
                solution[bussiness.name] = Totalbusiness
                result.push(solution)
            }
        }
    }
    let index=1;
    result.forEach(res=>{
        console.log(index++,res);
    })
    return result
}

testcases.forEach(testcase=>{
    console.log(testcase)
    Solverfunction(testcase)
    console.log("")
})
