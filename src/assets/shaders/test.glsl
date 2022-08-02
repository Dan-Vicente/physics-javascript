#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 resolution;
varying vec2 fragCoord;

#define M_PI 3.1415926535897932384626433832795

float rand(vec2 co)
{
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main()
{
	float size = 30.0;
	float prob = 0.95;
	
	vec2 pos = floor(1.0 / size * fragCoord.xy);
	
	float color = 0.0;
	float starValue = rand(pos);

	if (rand(fragCoord.xy / resolution.xy) > 0.996)
	{
		float r = rand(fragCoord.xy);
		color = r * (0.25 * sin(time * (r * 5.0) + 720.0 * r) + 0.75);
	}
	
	gl_FragColor = vec4(vec3(color), 1.0);
}
