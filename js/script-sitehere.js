$(function () {

	var scrollMagicController = new ScrollMagic.Controller(
            {
                globalSceneOptions: {
                    triggerHook: 'onLeave'
                }
            }
        );
        var topperTween = TweenMax.to('#header span.bg.blur ', 1,
            {
                opacity: 1
            }
        );
        var headingTween = TweenMax.to('#header h1, #header p', 1,
            {
                y: 200
            }
        );
        var scene = new ScrollMagic.Scene(
            {
                triggerElement: '#header',
                duration: '70%'
            }
        )
        .setTween([topperTween, headingTween])
        .addTo(scrollMagicController);

});