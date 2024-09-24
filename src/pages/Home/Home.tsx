import { useEffect } from 'react';
import $ from 'jquery';
import FormComponent from '../../components/FormComponent/FormComponent';

const Home = () => {
  useEffect(() => {
    $('#text').on('click', function () {
      $(this).text('Text changed via jQuery!');
    });

    $('#animate-btn').on('click', function () {
      $('#blue-box').animate({ left: '85%' }, 1000, function () {
        $(this).animate({ width: '200px', height: '200px' }, 1000, function () {
          $(this).css({ backgroundColor: 'white', color: 'blue' });
          $(this).text('Animated with jQuery!');
        });
      });
    });

    $('#select').on('change', function () {
      const selectedValue = $(this).val();
      if (selectedValue === 'show') {
        $('#extra-input').show();
      } else {
        $('#extra-input').hide();
      }
    });

    $('#extra-input').hide();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1
        id="text"
        className="text-xl font-bold cursor-pointer"
      >
        Click me to change text via jQuery
      </h1>

      <div
        id="blue-box"
        className="w-24 h-24 bg-blue-600 text-white flex items-center justify-center absolute"
        style={{ left: '10%' }}
      >
        Moving...
      </div>
      <button
        id="animate-btn"
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Start Animation
      </button>

      <FormComponent />
    </div>
  );
};

export default Home;