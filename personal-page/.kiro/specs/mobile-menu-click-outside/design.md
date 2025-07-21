# 设计文档

## 概述

此设计为移动端汉堡菜单添加点击外部关闭功能。该功能将通过在菜单打开时添加一个透明的覆盖层来实现，当用户点击覆盖层时菜单将关闭。这种方法既保持了现有的组件结构，又提供了良好的用户体验和性能。

## 架构

### 当前架构
- `Header` 组件管理菜单状态 (`isMenuOpen`)
- `MobileMenu` 组件接收 `isOpen` 和 `onClose` props
- 菜单使用固定定位 (`fixed`) 和变换 (`transform`) 实现侧滑效果

### 新架构
- 添加一个透明覆盖层 (`Overlay`) 组件
- 覆盖层将覆盖整个屏幕，但只在菜单打开时可见
- 点击覆盖层将触发 `onClose` 回调
- 菜单内容将阻止事件冒泡以避免意外关闭

## 组件和接口

### 新增组件

#### Overlay 组件
```typescript
interface OverlayProps {
  isVisible: boolean;
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps>
```

**职责：**
- 在菜单打开时显示透明覆盖层
- 处理点击事件以关闭菜单
- 提供适当的z-index层级

### 修改的组件

#### MobileMenu 组件
- 添加事件处理以阻止菜单内容的点击事件冒泡
- 集成覆盖层组件
- 保持现有的props接口不变

## 数据模型

### 状态管理
- 无需新增状态，继续使用现有的 `isMenuOpen` 状态
- 覆盖层的可见性直接基于 `isOpen` prop

### 事件处理
```typescript
// 覆盖层点击处理
const handleOverlayClick = () => {
  onClose();
};

// 菜单内容点击处理（阻止冒泡）
const handleMenuContentClick = (e: React.MouseEvent) => {
  e.stopPropagation();
};
```

## 错误处理

### 事件监听器管理
- 覆盖层组件将自动管理其生命周期
- 无需手动添加/移除事件监听器，因为使用React的事件系统

### 性能考虑
- 覆盖层只在菜单打开时渲染
- 使用条件渲染而非visibility控制以优化性能
- 避免不必要的重新渲染

## 测试策略

### 单元测试
1. **覆盖层渲染测试**
   - 验证覆盖层在菜单打开时渲染
   - 验证覆盖层在菜单关闭时不渲染

2. **点击事件测试**
   - 验证点击覆盖层触发onClose
   - 验证点击菜单内容不触发onClose

3. **事件冒泡测试**
   - 验证菜单内容点击不会冒泡到覆盖层

### 集成测试
1. **完整交互流程**
   - 打开菜单 → 点击外部 → 菜单关闭
   - 打开菜单 → 点击菜单项 → 菜单关闭并导航
   - 打开菜单 → 点击关闭按钮 → 菜单关闭

2. **响应式测试**
   - 验证功能只在移动端激活
   - 验证桌面端不受影响

### 可访问性测试
1. **键盘导航**
   - 验证ESC键可以关闭菜单（可选增强）
   - 验证焦点管理正确

2. **屏幕阅读器**
   - 验证覆盖层不干扰屏幕阅读器
   - 验证ARIA标签正确

## 实现细节

### CSS类和样式
```css
/* 覆盖层样式 */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25; /* 低于菜单的z-30 */
  background: transparent;
}
```

### 组件层级
```
Header
├── Navigation
├── HamburgerButton
└── MobileMenu
    ├── Overlay (新增)
    └── MenuContent
        ├── CloseButton
        └── MenuItems
```

### Z-Index 管理
- 覆盖层: z-25
- 菜单内容: z-30 (现有)
- 确保覆盖层在菜单下方但在页面内容上方

## 向后兼容性

- 保持所有现有的props接口不变
- 保持现有的CSS类名和样式
- 保持现有的关闭方法（关闭按钮、菜单项点击）
- 新功能作为增强添加，不影响现有行为