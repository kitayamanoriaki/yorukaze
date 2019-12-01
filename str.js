let trialArray_1 =  ["aabdccdbcacd", "aad"]

function MinWindowSubstring(strArr) {

  let extractedStrings = ""

  for(let i=0; i<strArr[0].length; i++){

      console.log("Round "+i+" : "+strArr[0].substr(i,1));
        for(let j=1; j<=strArr[0].length-i; j++){
          console.log("//////////////////// ");
          if(strArr[0].substr(i,j).length<strArr[1].length){
            console.log("- "+j+" : "+strArr[0].substr(i,j)+" <= 🤧invalid strings");
          }else{
            console.log(" - "+j+" : "+strArr[0].substr(i,j));
            let n_array = strArr[0].substr(i,j).split('')
            let k_array = strArr[1].split('')

            //check if the strings contain K's strings
            let isValid = false;
            let checkStringsArray = n_array;
            for(let k=0;k<k_array.length;k++){
              if(checkStringsArray.indexOf(k_array[k])>=0){
                console.log("✅ "+k_array[k]);
                for(let l=0; l<checkStringsArray.length;l++){

                  //Exclude any cases that multiple same characters don't get counted
                  if(checkStringsArray[l]==k_array[k]){
                    checkStringsArray.splice(l,1);
                    console.log("🦐 "+JSON.stringify(checkStringsArray));
                  }

                }
                isValid = true
              }else{
                console.log("⛱ It doesn't contain "+k_array[k]+" ("+strArr[0].substr(i,j)+")");
                isValid = false
                break;
              }
              // Evaluate the strings if it deserves as the answer
              //Set up conditions
              if(k==k_array.length-1 && isValid){

                console.log(k==k_array.length-1);//last loop
                console.log(isValid);//valid strings
                isValid = false//reset
                console.log("This strings have a proper condition : "+strArr[0].substr(i,j));

                if(extractedStrings.length>strArr[0].substr(i,j).length || extractedStrings == ""){
                  console.log("Updated => "+extractedStrings.length>strArr[0].substr(i,j).length || extractedStrings == "");//has qualification to be updated
                  extractedStrings = strArr[0].substr(i,j)
                }else{
                  console.log("💊 Invalid Strings => "+extractedStrings.length>strArr[0].substr(i,j).length || extractedStrings == "");//has qualification to be updated
                }
              }
            }
          }
        }//for(let j=1; j<=strArr[0].length-i; j++)

  }//for(let i=0; i<strArr[0].length; i++)

  // code goes here
  return extractedStrings
}

// keep this function call here
console.log(MinWindowSubstring(trialArray_1));
