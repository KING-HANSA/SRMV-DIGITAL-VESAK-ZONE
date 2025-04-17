 document.addEventListener("DOMContentLoaded", function() {
      var loadingDiv = document.getElementById('loading');
      var countdown = 8;  

      function updateCountdown() {
        loadingDiv.innerHTML = "<h1 style='color:yellow'>ස්වර්ණහංස ජාතක කතා වස්තුව</h1>" +
                               "<h3>වෙසක් තොරණ</h3>" +
                               "<h4>හරිත දුෂ්මන්ත සේනාධීර ගේ නිර්මාණයකි</h4>" +
                                "<p>තොරණේ ඇති එක් එක් කොටුව මතට Mouse එක රැගෙන යාමෙන් එම කොටුවේ විස්තරය බලාගැනීමට හැකිය. කොටුව මත Click කිරීමෙන් අදාළ කොටුව පමණක් දර්ශණය කරගත හැකිය.</p>"+
                               "<p>Thorana will show in " + countdown + " seconds...</p>";

        countdown--;
        if (countdown >= 0) {
          setTimeout(updateCountdown, 1000);
        } else {
          loadingDiv.style.display = 'none';
        }
      }

      updateCountdown();
    });
