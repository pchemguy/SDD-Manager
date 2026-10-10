## Tetris

### Seed Description

```
A classic browser-based Tetris game
```

### PROJECT.md

```text
# Tetris

## Brief

A classic browser-based Tetris game using standard front-end technologies (HTML/CSS/JS).

## Target Audience and Scope

Players looking for a quick, browser-compatible game of Tetris. The scope includes core classic mechanics alongside standard modern quality-of-life enhancements. 

## Goals

- Provide a fully playable Tetris game in a modern web browser.
- Deliver smooth gameplay using the HTML5 Canvas API and vanilla JavaScript.
- Implement standard modern features including:
    - Hold piece functionality.
    - Ghost piece (drop preview).
    - 7-bag piece randomization.
    - Wall kicks.
    - Hard drop.
    - Lock delay (equal to one full gravity interval).

## Non-Goals

- Multiplayer functionality.
- Leaderboards requiring a backend server.
- Mobile touch controls (initial version is keyboard-focused).
```

Note: modern features should be a separate phase or can be deferred and implemented as a feature campaign.

### Feature Campaign: Multiline Clear Bonus

```
Bonus for clearing multiple lines.
```

### Feature Campaign: Autohidden Ghost Piece

```
Dynamically hide ghost piece when it is projected into the top half of the board.
```

### Feature Campaign: Xray or Tunnel Mode

In the xray/tunnel mode a piece is allowed to go through blocking (filled) cells. This mode may be defined as one bonus switch at user's will per piece. For example, at the beginning user may be granted a certain number of activation. Alternatively, one activation may be granted for each case of simultaneously clearing 4 lines, possibly with a capped maximum.

#### Non-interfering Variant

When there is an empty region blocked by pieces above it in where the current piece could fit (non-interfering variant), a piece in the xray/tunnel mode is allowed to go through the blocking pieces.

#### Interfering Variant

When there is an empty region blocked by pieces above it in where the current piece could fit, a piece 

In the xray/tunnel mode with interference a piece can go down irrespective of any blocking pieces as low as it can cover at least one empty cell, possibly overlapping with field cells.
