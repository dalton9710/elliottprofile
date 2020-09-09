$("#form").submit(function (event) {
    event.preventDefault();
  
    const nickName = event.target.nickName.value;
    const lastName = $("input[name*=lastName]").val();
    const message = $("input[name*=message]").val();
    const job = $("input[name*=job]").val();
    const email = $("input[name*=email]").val();
  
    $("#target").append(
      `<p>Your name is: ${nickName} ${lastName}, the occupation is: ${job}, the email : ${email}</p>`
      `<p>ou want to tell Elliott that ${message}</p>`
    );
  });