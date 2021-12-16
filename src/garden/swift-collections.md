# Swift Collections
## A practical look at Array, Deque & More

![Apple MacbookPro](https://miro.medium.com/max/1400/1*vFHl1oYU172x7BIL4T1naQ.jpeg)

**As we come to the end of 2021**, I find myself reflecting on the fact that I have been learning to code for almost 40 years, having started doing so in September of 1982. One of the main reasons I love computer science is perhaps because it never stands still — although thinking about it I am reminded of a funny quote by Richard Hamming on the subject of changes in the domain.

> Computer scientists unlike physicists don’t stand on each other’s shoulders to make new discoveries, they stand on each other’s toes. Reinventing new ways to do the same things differently.
>> _A statement that is — sadly — still true today. Case in hand here is a photo of a book I got at home by K&R on learning to code in C that I purchased in 1982._

### Open Source
Now, I confess this isn’t the `first article` I that I have written that eludes to this subject. I wrote about a similar one here. But this paper is different in that it advocates you writing code that relies on higher-level abstractions that have been exhaustively tried and tested by the open-source community. More significantly is the fact that a large commercial company is standing behind them, Apple. An important difference if you are working for a big blue-chip since normally open source is, to say the least — sneered at by the big blues.

### Higher Abstractions
When I learnt to code, we had a whole series of lecturers on learning to sort things — different sorts of sorts, insertion sort, bubble sort and quick sort come to mind. Today in most languages you just use a higher abstraction, sort or sorted.

| Processor | Display Size | RAM  | Storage |
| --------- | ------------ | ---- | ------- |
| Apple M1X | 13 inches    | 8 GB | 1 TB   | 

```swift
import SwiftUI
struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
        .onAppear {
          var start = CFAbsoluteTimeGetCurrent()
          var items = Array(1...250_000)
          
          while items.isEmpty == false {
            items.removeFirst()
          }
          var end = CFAbsoluteTimeGetCurrent()
          print("Took \(end - start) seconds to get to 0")
          
          start = CFAbsoluteTimeGetCurrent()
          items = Array(1...250_000)
          
          while items.isEmpty == false {
            items.removeLast()
          }
          end = CFAbsoluteTimeGetCurrent()
          print("Took \(end - start) seconds to get to 0")
        }
    }
}
```

### Swift Algorithms and Collection Packages
Now add the Collections package to your project by importing Collections at the top of your code [it will complain and ask if it should search, say yes]. It will then find Collections and present this window for you to confirm you want to import them.
