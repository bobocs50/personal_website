"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function WorksHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 20)
    camera.position.set(0, 1.2, 3.2)
    camera.lookAt(0, 0, 0)

    const geometry = new THREE.PlaneGeometry(6, 6, 220, 180)
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying vec3 vPos;

        void main() {
          vec3 pos = position;
          float speed = 0.28;
          float wave1 = sin(pos.x * 1.6 + uTime * speed) * 0.12;
          float wave2 = sin(pos.y * 1.2 + uTime * speed * 0.8) * 0.09;
          float wave3 = sin((pos.x + pos.y) * 0.9 + uTime * speed * 0.6) * 0.07;
          float height = wave1 + wave2 + wave3;
          pos.z += height;
          vUv = uv;
          vPos = pos;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPos;

        void main() {
          vec3 dx = dFdx(vPos);
          vec3 dy = dFdy(vPos);
          vec3 normal = normalize(cross(dx, dy));
          vec3 lightDir = normalize(vec3(-0.2, 0.4, 0.9));
          float light = clamp(dot(normal, lightDir) * 0.6 + 0.6, 0.0, 1.0);

          float edgeX = smoothstep(0.0, 0.18, vUv.x) * (1.0 - smoothstep(0.82, 1.0, vUv.x));
          float edgeY = smoothstep(0.0, 0.2, vUv.y) * (1.0 - smoothstep(0.8, 1.0, vUv.y));
          float edgeMask = edgeX * edgeY;

          vec3 topColor = vec3(0.88, 0.94, 1.0);
          vec3 bottomColor = vec3(0.113, 0.239, 0.388);
          float gradient = smoothstep(-0.25, 1.05, vUv.y);
          gradient = pow(gradient, 0.75);
          vec3 base = mix(bottomColor, topColor, gradient);
          float alpha = 0.32 * edgeMask;
          gl_FragColor = vec4(base * light, alpha);
        }
      `,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI * 0.5
    scene.add(mesh)

    const resize = () => {
      const { clientWidth, clientHeight } = canvas
      if (clientWidth === 0 || clientHeight === 0) return
      renderer.setSize(clientWidth, clientHeight, false)
      const aspect = clientWidth / clientHeight
      camera.aspect = aspect
      camera.updateProjectionMatrix()

      const scale = Math.max(1.2, aspect)
      mesh.scale.set(scale, scale, 1)
    }

    resize()
    window.addEventListener("resize", resize)

    const clock = new THREE.Clock()
    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      material.uniforms.uTime.value = clock.getElapsedTime()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section className="relative bg-[#1E3A5F] text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-12 lg:px-16 text-center">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-medium tracking-tight leading-none mb-6 text-balance drop-shadow-[0_0_18px_rgba(255,255,255,0.35)]">
          philipp huynh
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white/85 mb-4">
          is a builder, a dreamer, a doer.
        </p>
        <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
          {"currently building "}
          <span className="font-medium text-white/90">AnkiMax</span>
          {", studying business informatics @ "}
          <span className="font-medium text-white/90">university of potsdam</span>
          {"."}
        </p>
        <p className="text-sm md:text-base text-white/70 mt-1">
          seeking summer 2026 co-ops!
        </p>
      </div>
    </section>
  )
}
