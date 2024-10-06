#include <emscripten.h>


EM_JS(void, call_alert, (), {
  alert('hello world!');
  
});


extern "C" {
EMSCRIPTEN_KEEPALIVE
    float myFunction (float num) {
        
        return num * 2;
    }
}
