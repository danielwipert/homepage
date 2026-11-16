---
title: "Nvidia's monopoly in AI software and hardware is getting challenged by a new..."
date: 2026-09-30
topics: ['models-and-market']
excerpt: "Nvidia's monopoly in AI software and hardware is getting challenged by a new partnership between Deepseek and Huawei. If they can even get a toe in the door, it will change the..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7511106419778052096"
published: true
---
Nvidia's monopoly in AI software and hardware is getting challenged by a new partnership between Deepseek and Huawei. If they can even get a toe in the door, it will change the entire AI landscape and industry.

To understand what is happening here, it is best to understand the basics of CUDA. CUDA (Compute Unified Device Architecture) is NVIDIA’s parallel computing platform and programming model. It is the software layer that allows developers to take GPUs, which were originally designed strictly to render 3D graphics for video games, and use them as general-purpose, massively parallel supercomputers.

In 2012, Alex Krizhevsky used two consumer NVIDIA GeForce GTX 580 GPUs programmed with CUDA to train AlexNet, a deep neural network that shattered performance records in the ImageNet computer vision competition. That single moment proved that deep learning on GPUs was viable. Because CUDA was already installed on millions of gaming laptops and desktop PCs in university labs worldwide, an entire generation of computer science researchers wrote their PhD dissertations strictly in CUDA.

To challenge Nvidia’s dominance, you can’t just manufacture alternative silicon; you have to break the software network effect that ties developers to CUDA. The DeepSeek-Huawei collaboration systematically attacks Nvidia’s moat across every layer of the stack.

DeepSeek and Huawei are building a completely independent, open-source stack that targets each tier of Nvidia's moat. Rather than attempting to match Nvidia on silicon performance alone, the alliance directly addresses the primary barrier to leaving Nvidia, software lock-in.

At the core of this effort is TileLang, a high-level programming language engineered to replace CUDA by abstracting away low-level memory routing and hardware instructions. This software layer allows AI engineers to write model code once and compile it natively onto non-Nvidia accelerators without incurring the high labor costs of rewriting legacy CUDA kernels from scratch.

To support this new programming layer, DeepSeek and Huawei have open-sourced a full suite of low-level compute and communication libraries (including DeepGEMM, FlashMLA, and DeepEP) engineered to deliver functional parity with Nvidia’s proprietary cuDNN and NCCL packages.

On the hardware and networking front, the partnership co-designed a 128-chip Ascend 950 "supernode" system. By cooptimizing chip-to-chip bandwidth alongside custom communication algorithms, they eliminate the data transfer bottlenecks that typically plague non-Nvidia server clusters.

By distributing this complete software and system architecture as open source on GitHub, they are leveraging community-driven network effects to lower switching costs globally and rapidly build a viable alternative ecosystem.

Huge move.

https://lnkd.in/gp4UVsj8
