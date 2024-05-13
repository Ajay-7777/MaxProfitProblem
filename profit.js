const testcases = [
  { time: 7, earning: 3000 },
  { time: 8, earning: 4500 },
  { time: 13, earning: 16500 }
];


const CreationTime=[5,4,10]
const earnings=[1500,1000,3000]

function Solverfunction(inputfromuser){
    let result = []
    const givendataforBusiness = [{name:'T', earning:1500, developmentTime:5}, {name:'P', earning:1000, developmentTime:4}, {name:'C', earning:3000, developmentTime:10}]
    for(let i = 0; i<givendataforBusiness.length; i++){
        let bussiness = givendataforBusiness[i]
        if(inputfromuser.time < bussiness.developmentTime){
            continue
        }else{
            let Totalbusiness = parseInt(inputfromuser.time / bussiness.developmentTime)
            let totalBussinessRunningTime = 0
            let totalTimeSpentInDevelopment  = 0
            for(let i = 1; i<= Totalbusiness; i++){
                let bussinessRunningTime = (inputfromuser.time - totalTimeSpentInDevelopment ) - bussiness.developmentTime
                totalBussinessRunningTime += bussinessRunningTime
                totalTimeSpentInDevelopment += bussiness.developmentTime
            }
            let totalEarningFromBussiness = totalBussinessRunningTime * bussiness.earning
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
