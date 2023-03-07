function checkAge(){
    const ageFriend = document.getElementById('age');
    const ageText = ageFriend.value;
    // console.log(ageText);
    const errorTag = document.getElementById('error');
    

    try{
        // console.log(bBaria)
        const age = parseInt(ageText);
        if(isNaN(age)){
            // console.log('age not a found', age, ageText);
            throw "Please enter a number";
        }
        else if (age < 18){
            throw "This age is not allow";
        }
        else if (age > 38){
            throw "Murubbi ra not allow";
        }
        errorTag.innerHTML = '';
    }
    catch(err){
    console.log('ERROR', err); 
    errorTag.innerHTML= 'something wrong'
    }
    finally{
        console.log('All done inside ty catch');
    }
    console.log(1111);
}

