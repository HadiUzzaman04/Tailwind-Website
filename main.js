currentSlideID = 1;
sliderElement = document.getElementById('slider')
totalslides = sliderElement.childElementCount;

function next()
{
    if (currentSlideID < totalslides)
    currentSlideID++;
    showSlide()
}
function prev()
{
    if (currentSlideID > 2)
    currentSlideID--;
    showSlide()
}
function showSlide()
{
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalslides; index++)
    {
        const element = slides[index];
        if(currentSlideID===index+1)
        {
            element.classlist.remove('hidden')
        }else{
            element.classlist.add('hidden')
        }
    }
}