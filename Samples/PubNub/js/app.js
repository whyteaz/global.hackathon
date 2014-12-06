
/* *
 * PubNub Example: Super Simple Chat Room Demo
 * For more JavaScript and more SDKs, visit http://www.pubnub.com/developers/
 */

(function() {

    var output = document.getElementById('output');
    var input = document.getElementById('input'); 
    var button = document.getElementById('button');
    var avatar = document.getElementById('avatar');

    var channel = 'mchat';
    
    // Assign a random avatar (using font icons. see CSS file) in random color
    avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);

    /* *
     * PubNub Initialization
     * Sign up and get your own subscribe and publish keys at pubnub.com :-)
     */
    var p = PUBNUB.init({
        subscribe_key: 'demo',
        publish_key:   'demo'
    });

    /* *
     * Receiving messages with PubNub Subscribe API
     */
    p.subscribe({
        channel  : channel,
        callback : function(m) { 
            output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' +  m.text.replace( /[<>]/ig, '' ) + '</span></p>' + output.innerHTML; 
        }
    });

    /* *
     * Sending a message with PubNub Publish API
     */
    function publish() {
        p.publish({
            channel : channel, 
            message : {
                avatar: avatar.className, 
                text: input.value
            }, 
            callback : function() {
                input.value = '';
            }
        });
    }

    // Press Return or click the Send button to submit
    input.addEventListener('keyup', function(e) {
        (e.keyCode || e.charCode) === 13 && publish();
    }, false);

    button.addEventListener('click', publish, false);

})();