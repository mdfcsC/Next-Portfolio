import { NextRequest, NextResponse } from 'next/server';

/**
 * Next.js 中间件函数
 * 在请求到达页面组件之前进行拦截和处理
 */
export default function middleware(request: NextRequest) {
    // 检查请求的路径是否为 '/pic-display/picture'
    // 使用 nextUrl.pathname 因为它是已解析的 URL 对象，可以直接访问 pathname 属性
    if (request.nextUrl.pathname === '/pic-display/picture') {
        // 将请求重写（rewrite）到 '/pic-display' 路径
        // 重写不会改变浏览器地址栏的 URL，但会在服务器端处理时指向不同的页面
        // 
        // new URL() 需要两个参数：
        // 1. '/pic-display' - 目标路径（相对路径）
        // 2. request.url - 基础 URL（完整的 URL 字符串，包含域名等信息）
        //    用 request.url 而不是 nextUrl 是因为 new URL() 构造函数需要完整的 URL 字符串作为 base
        return NextResponse.rewrite(new URL('/pic-display', request.url))
        
        // 【替代写法】也可以全部使用 nextUrl：
        // return NextResponse.rewrite(new URL('/pic-display', request.nextUrl))
        // 这样写也完全正确，因为 NextURL 对象在需要字符串的地方会自动转换为字符串
        // 选择哪种写法主要看个人偏好和代码一致性
    }
    
    // 如果路径不匹配，则继续正常处理，不做任何拦截
}

/**
 * 两种写法的区别：
 * 方案一（当前代码）：request.nextUrl.pathname + request.url
 * - nextUrl 用于方便获取路径属性
 * - url 用于提供完整的基础 URL 字符串
 * 
 * 方案二（替代方案）：request.nextUrl.pathname + request.nextUrl  
 * - 全部使用 nextUrl，代码更统一
 * - NextURL 对象会自动转换为字符串
 * 
 * 实际效果：
 * 当用户访问 /pic-display/picture 时，
 * 浏览器地址栏仍显示 /pic-display/picture，
 * 但实际渲染的是 /pic-display 页面的内容
 * 
 * 这通常用于：
 * - URL 重定向和路径规范化
 * - 处理遗留 URL 路径
 * - 实现 URL 别名功能
 */