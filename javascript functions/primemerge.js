function primerange(low, upp) {



    for (i = low; i <= upp; i++) {
        var flag = 0;
        for (j = 2; j < i; j++) {

            if (i % j == 0) {
                flag += 1;
                break;


            }
            if (flag == 0) {

                console.log(i)

            }
        }


    }

}
primerange(3, 10)